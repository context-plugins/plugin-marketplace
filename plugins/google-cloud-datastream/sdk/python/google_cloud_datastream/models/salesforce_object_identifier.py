from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SalesforceObjectIdentifier(SdkBaseModel):
    """Salesforce data source object identifier."""

    object_name: Optional[str] = Field(default=UNSET, alias="objectName")
    """Required. The object name."""


class SalesforceObjectIdentifierDict(TypedDict):
    object_name: NotRequired[str]
