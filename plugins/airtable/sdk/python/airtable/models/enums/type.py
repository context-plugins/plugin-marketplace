from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The type of the field."""

    SINGLE_LINE_TEXT = "singleLineText"
    EMAIL = "email"
    URL = "url"
    MULTILINE_TEXT = "multilineText"
    NUMBER = "number"
    PERCENT = "percent"
    CURRENCY = "currency"
    SINGLE_SELECT = "singleSelect"
    MULTIPLE_SELECTS = "multipleSelects"
    SINGLE_COLLABORATOR = "singleCollaborator"
    MULTIPLE_COLLABORATORS = "multipleCollaborators"
    MULTIPLE_RECORD_LINKS = "multipleRecordLinks"
    DATE = "date"
    DATE_TIME = "dateTime"
    PHONE_NUMBER = "phoneNumber"
    MULTIPLE_ATTACHMENTS = "multipleAttachments"
    CHECKBOX = "checkbox"
    FORMULA = "formula"
    CREATED_TIME = "createdTime"
    ROLLUP = "rollup"
    COUNT = "count"
    LOOKUP = "lookup"
    MULTIPLE_LOOKUP_VALUES = "multipleLookupValues"
    AUTO_NUMBER = "autoNumber"
    BARCODE = "barcode"
    RATING = "rating"
    RICH_TEXT = "richText"
    DURATION = "duration"
    LAST_MODIFIED_TIME = "lastModifiedTime"
    BUTTON = "button"
    CREATED_BY = "createdBy"
    LAST_MODIFIED_BY = "lastModifiedBy"
    EXTERNAL_SYNC_SOURCE = "externalSyncSource"
    AI_TEXT = "aiText"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
