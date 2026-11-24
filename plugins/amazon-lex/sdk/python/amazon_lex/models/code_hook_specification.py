from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .lambda_code_hook import LambdaCodeHook, LambdaCodeHookDict


class CodeHookSpecification(SdkBaseModel):
    lambda_code_hook: LambdaCodeHook = Field(alias="lambdaCodeHook")


class CodeHookSpecificationDict(TypedDict):
    lambda_code_hook: LambdaCodeHookDict
