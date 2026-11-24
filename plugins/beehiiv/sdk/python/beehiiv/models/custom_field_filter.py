from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomFieldFilter(SdkBaseModel):
    """A single custom field filter condition."""

    name: str
    """The display name of the custom field (case-insensitive match). Must be an existing custom field on the
    publication."""

    operator: str
    """The comparison operator for the filter (e.g., ``equal``, ``not_equal``, ``contains``, ``exists``,
    ``does_not_exist``). Available operators depend on the custom field's type."""

    value: Optional[str] = UNSET
    """The value to compare against. Required for all operators except ``exists`` and ``does_not_exist``."""


class CustomFieldFilterDict(TypedDict):
    name: str
    operator: str
    value: NotRequired[str]
