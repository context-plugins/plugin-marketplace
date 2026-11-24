from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LambdaDataSourceConfig(SdkBaseModel):
    lambda_function_arn: str = Field(alias="lambdaFunctionArn")
    """The Amazon Resource Name (ARN) for the Lambda function."""


class LambdaDataSourceConfigDict(TypedDict):
    lambda_function_arn: str
