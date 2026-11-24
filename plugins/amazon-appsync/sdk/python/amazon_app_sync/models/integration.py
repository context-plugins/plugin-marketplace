from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .lambda_config import LambdaConfig, LambdaConfigDict


class Integration(SdkBaseModel):
    data_source_name: str = Field(alias="dataSourceName")
    """The unique name of the data source that has been configured on the API."""

    lambda_config: Optional[LambdaConfig] = Field(default=UNSET, alias="lambdaConfig")


class IntegrationDict(TypedDict):
    data_source_name: str
    lambda_config: NotRequired[LambdaConfigDict]
