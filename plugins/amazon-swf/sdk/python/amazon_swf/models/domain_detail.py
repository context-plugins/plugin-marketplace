from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .domain_configuration import DomainConfiguration, DomainConfigurationDict
from .domain_info import DomainInfo, DomainInfoDict


class DomainDetail(SdkBaseModel):
    domain_info: DomainInfo = Field(alias="domainInfo")
    configuration: DomainConfiguration


class DomainDetailDict(TypedDict):
    domain_info: DomainInfoDict
    configuration: DomainConfigurationDict
