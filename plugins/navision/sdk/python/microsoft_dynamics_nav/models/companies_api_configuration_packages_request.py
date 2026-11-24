from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompaniesApiConfigurationPackagesRequest(SdkBaseModel):
    code: str
    """The configuration package code"""

    package_name: str = Field(alias="packageName")
    """The configuration package name"""


class CompaniesApiConfigurationPackagesRequestDict(TypedDict):
    code: str
    package_name: str
