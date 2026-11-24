from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomAttribute(SdkBaseModel):
    object_identifier: Optional[str] = Field(default=UNSET, alias="ObjectIdentifier")
    """Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN)."""

    value: Optional[str] = Field(default=UNSET, alias="Value")
    """Specifies the attribute value of relative distinguished name (RDN)."""


class CustomAttributeDict(TypedDict):
    object_identifier: NotRequired[str]
    value: NotRequired[str]
