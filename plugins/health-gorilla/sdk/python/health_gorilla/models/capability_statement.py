from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CapabilityStatement(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    status: Optional[str] = UNSET
    fhir_version: Optional[str] = Field(default=UNSET, alias="fhirVersion")
    rest: Optional[list[Any]] = UNSET


class CapabilityStatementDict(TypedDict):
    resource_type: NotRequired[str]
    status: NotRequired[str]
    fhir_version: NotRequired[str]
    rest: NotRequired[list[Any]]
