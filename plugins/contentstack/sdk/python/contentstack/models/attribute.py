from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.data_type import DataTypeOrStr


class Attribute(SdkBaseModel):
    """A user attribute definition used in audience segment rules."""

    uid: Optional[str] = UNSET
    """Unique identifier of the attribute."""

    name: Optional[str] = UNSET
    """Display name of the attribute."""

    key: Optional[str] = UNSET
    """Machine-readable key used to reference this attribute in rules and SDKs."""

    data_type: Optional[DataTypeOrStr] = UNSET
    """Data type of the attribute."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the attribute was created."""


class AttributeDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    key: NotRequired[str]
    data_type: NotRequired[DataTypeOrStr]
    created_at: NotRequired[RFC3339DateTime]
