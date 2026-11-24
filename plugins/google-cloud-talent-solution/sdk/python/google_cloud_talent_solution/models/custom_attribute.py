from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomAttribute(SdkBaseModel):
    """Custom attribute values that are either filterable or non-filterable."""

    long_values: Optional[list[str]] = Field(default=UNSET, alias="longValues")
    """Exactly one of string_values or long_values must be specified. This field is used to perform number range search.
    (``EQ``, ``GT``, ``GE``, ``LE``, ``LT``) over filterable ``long_value``. Currently at most 1 long_values is
    supported."""

    string_values: Optional[list[str]] = Field(default=UNSET, alias="stringValues")
    """Exactly one of string_values or long_values must be specified. This field is used to perform a string match
    (``CASE_SENSITIVE_MATCH`` or ``CASE_INSENSITIVE_MATCH``) search. For filterable ``string_value``s, a maximum total
    number of 200 values is allowed, with each ``string_value`` has a byte size of no more than 500B. For unfilterable
    ``string_values``, the maximum total byte size of unfilterable ``string_values`` is 50KB. Empty string isn't
    allowed."""

    filterable: Optional[bool] = UNSET
    """If the ``filterable`` flag is true, the custom field values may be used for custom attribute filters
    JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is
    false."""

    keyword_searchable: Optional[bool] = Field(default=UNSET, alias="keywordSearchable")
    """If the ``keyword_searchable`` flag is true, the keywords in custom fields are searchable by keyword match. If
    false, the values are not searchable by keyword match. Default is false."""


class CustomAttributeDict(TypedDict):
    long_values: NotRequired[list[str]]
    string_values: NotRequired[list[str]]
    filterable: NotRequired[bool]
    keyword_searchable: NotRequired[bool]
