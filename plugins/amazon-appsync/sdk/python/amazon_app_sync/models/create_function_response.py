from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .function_configuration import FunctionConfiguration, FunctionConfigurationDict


class CreateFunctionResponse(SdkBaseModel):
    function_configuration: Optional[FunctionConfiguration] = Field(default=UNSET, alias="functionConfiguration")


class CreateFunctionResponseDict(TypedDict):
    function_configuration: NotRequired[FunctionConfigurationDict]
