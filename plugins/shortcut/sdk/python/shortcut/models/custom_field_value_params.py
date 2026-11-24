from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomFieldValueParams(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    field_id: UUID
    """The unique public ID for the CustomField."""

    value_id: UUID
    """The unique public ID for the CustomFieldEnumValue."""

    value: Optional[str] = UNSET
    """A literal value for the CustomField. Currently ignored."""


class CustomFieldValueParamsDict(TypedDict):
    field_id: UUID
    value_id: UUID
    value: NotRequired[str]
