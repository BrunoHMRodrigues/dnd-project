const sectionAttributes = document.getElementById('container-attributes');

function getAttributeName(index) {
    let attributeName = '';
    switch (index) {        
        case 0:
    attributeName = 'strength';
    break;
        case 1:
    attributeName = 'dextery';
    break;
        case 2:
    attributeName = 'constitution';
    break;
        case 3:
    attributeName = 'intelligence';
    break;
        case 4:
    attributeName = 'wisdom';
    break;
        case 5:
    attributeName = 'charisma';
    break;
        default:
    break;
    }
    return attributeName;
}

function createChangeAttributesContent(elementFather, attributeName) {
    const getFather = document.getElementById(elementFather);
    let elementILeft = document.createElement('i');
    elementILeft.classList.add("bi");
    elementILeft.classList.add("bi-caret-left-fill");
    getFather.appendChild(elementILeft);

    let containerBonus = document.createElement('div');
    let idName = attributeName + '-bonus';
    containerBonus.id = idName;
    containerBonus.classList.add('container-bonus')
    getFather.appendChild(containerBonus);
    const getContainerBonus = document.getElementById(idName);
    let bonusValueP = document.createElement('p');
    bonusValueP.classList.add('bonus-attribute-text');
    bonusValueP.innerText = 0
    getContainerBonus.appendChild(bonusValueP);

    let elementIRight = document.createElement('i');
    elementIRight.classList.add("bi");
    elementIRight.classList.add("bi-caret-right-fill");
    getFather.appendChild(elementIRight);    
}

function createAttributesElements() {
    for (let index = 0; index < 6; index += 1) {
        let containerEachAttribute = document.createElement('div');
        let attributeName = getAttributeName(index);
        let classOrIdName = 'container-' + attributeName;
        containerEachAttribute.id = classOrIdName;
        containerEachAttribute.classList.add('container-attribute');
        sectionAttributes.appendChild(containerEachAttribute);

        let getContainerAttributeElement = document.getElementById(classOrIdName);
        let containerAttributeValue = document.createElement('div');
        classOrIdName = attributeName + '-value';
        containerAttributeValue.id = classOrIdName;
        containerAttributeValue.classList.add('attributes-value');
        containerAttributeValue.innerText = 8;
        getContainerAttributeElement.appendChild(containerAttributeValue);

        let containerChangeAttribute = document.createElement('div');
        classOrIdName = attributeName + '-change';
        containerChangeAttribute.id = classOrIdName;
        containerChangeAttribute.classList.add('container-change-attributes');
        getContainerAttributeElement.appendChild(containerChangeAttribute);
        
        createChangeAttributesContent(classOrIdName, attributeName);

        let label = document.createElement('label');
        classOrIdName = 'container-' + attributeName;
        label.for = classOrIdName;
        label.classList.add('attribute-name');
        label.innerText = attributeName;
        getContainerAttributeElement.appendChild(label);
    }
}

window.onload = function () {
    createAttributesElements();
}