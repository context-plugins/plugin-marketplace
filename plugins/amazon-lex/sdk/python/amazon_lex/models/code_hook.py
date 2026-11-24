from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CodeHook(SdkBaseModel):
    uri: str
    """The Amazon Resource Name (ARN) of the Lambda function."""

    message_version: str = Field(alias="messageVersion")
    """The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. For more
    information, see using-lambda."""


class CodeHookDict(TypedDict):
    uri: str
    message_version: str
