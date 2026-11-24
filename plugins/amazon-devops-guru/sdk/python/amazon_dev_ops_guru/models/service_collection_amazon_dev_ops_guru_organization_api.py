from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.service_name1 import ServiceName1OrStr


class ServiceCollectionAmazonDevOpsGuruOrganizationApi(SdkBaseModel):
    service_names: Optional[list[ServiceName1OrStr]] = Field(default=UNSET, alias="ServiceNames")
    """An array of strings that each specifies the name of an Amazon Web Services service."""


class ServiceCollectionAmazonDevOpsGuruOrganizationApiDict(TypedDict):
    service_names: NotRequired[list[ServiceName1OrStr]]
