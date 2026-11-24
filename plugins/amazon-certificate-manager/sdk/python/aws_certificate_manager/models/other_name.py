from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OtherName(SdkBaseModel):
    object_identifier: Optional[str] = Field(default=UNSET, alias="ObjectIdentifier")
    """Specifies an OID."""

    value: Optional[str] = Field(default=UNSET, alias="Value")
    """Specifies an OID value."""


class OtherNameDict(TypedDict):
    object_identifier: NotRequired[str]
    value: NotRequired[str]
