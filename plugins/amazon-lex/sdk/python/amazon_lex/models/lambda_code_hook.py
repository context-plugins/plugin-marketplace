from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LambdaCodeHook(SdkBaseModel):
    lambda_arn: str = Field(alias="lambdaARN")
    """The Amazon Resource Name (ARN) of the Lambda function."""

    code_hook_interface_version: str = Field(alias="codeHookInterfaceVersion")
    """The version of the request-response that you want Amazon Lex to use to invoke your Lambda function."""


class LambdaCodeHookDict(TypedDict):
    lambda_arn: str
    code_hook_interface_version: str
