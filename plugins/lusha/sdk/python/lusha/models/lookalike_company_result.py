from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .location2 import Location2, Location2Dict


class LookalikeCompanyResult(SdkBaseModel):
    domain: str | None
    linkedin_url: str | None = Field(alias="linkedinUrl")
    name: str
    employee_count: int | None = Field(alias="employeeCount")
    industry: str | None
    location: Location2


class LookalikeCompanyResultDict(TypedDict):
    domain: str | None
    linkedin_url: str | None
    name: str
    employee_count: int | None
    industry: str | None
    location: Location2Dict
