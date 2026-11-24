from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_field import SalesforceField, SalesforceFieldDict


class SalesforceObject(SdkBaseModel):
    """Salesforce object."""

    fields: Optional[list[SalesforceField]] = UNSET
    """Salesforce fields. When unspecified as part of include objects, includes everything, when unspecified as part of
    exclude objects, excludes nothing."""

    object_name: Optional[str] = Field(default=UNSET, alias="objectName")
    """The object name."""


class SalesforceObjectDict(TypedDict):
    fields: NotRequired[list[SalesforceFieldDict]]
    object_name: NotRequired[str]
