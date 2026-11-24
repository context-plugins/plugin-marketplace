from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class Patient(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    identifier: Optional[list[Any]] = UNSET
    name: Optional[list[Any]] = UNSET
    gender: Optional[str] = UNSET
    birth_date: Optional[Date] = Field(default=UNSET, alias="birthDate")
    address: Optional[list[Any]] = UNSET
    telecom: Optional[list[Any]] = UNSET


class PatientDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    identifier: NotRequired[list[Any]]
    name: NotRequired[list[Any]]
    gender: NotRequired[str]
    birth_date: NotRequired[Date]
    address: NotRequired[list[Any]]
    telecom: NotRequired[list[Any]]
