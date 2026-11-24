from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .configuration_package import ConfigurationPackage, ConfigurationPackageDict


class CompaniesApiConfigurationPackagesResponse(SdkBaseModel):
    value: Optional[list[ConfigurationPackage]] = UNSET


class CompaniesApiConfigurationPackagesResponseDict(TypedDict):
    value: NotRequired[list[ConfigurationPackageDict]]
