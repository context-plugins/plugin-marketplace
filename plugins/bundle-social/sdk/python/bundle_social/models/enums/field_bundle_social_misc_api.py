from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FieldBundleSocialMiscApi(str, Enum):
    NAME = "name"
    LANGUAGE_CODE = "languageCode"
    STORE_CODE = "storeCode"
    TITLE = "title"
    PHONE_NUMBERS = "phoneNumbers"
    CATEGORIES = "categories"
    STOREFRONT_ADDRESS = "storefrontAddress"
    WEBSITE_URI = "websiteUri"
    REGULAR_HOURS = "regularHours"
    SPECIAL_HOURS = "specialHours"
    SERVICE_AREA = "serviceArea"
    LABELS = "labels"
    AD_WORDS_LOCATION_EXTENSIONS = "adWordsLocationExtensions"
    LATLNG = "latlng"
    OPEN_INFO = "openInfo"
    METADATA = "metadata"
    PROFILE = "profile"
    RELATIONSHIP_DATA = "relationshipData"
    MORE_HOURS = "moreHours"
    SERVICE_ITEMS = "serviceItems"

    __str__ = str.__str__


FieldBundleSocialMiscApiOrStr: TypeAlias = Annotated[
    FieldBundleSocialMiscApi | str, open_enum_validator(FieldBundleSocialMiscApi)
]
