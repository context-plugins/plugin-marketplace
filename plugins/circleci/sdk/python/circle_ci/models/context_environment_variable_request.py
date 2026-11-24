from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ContextEnvironmentVariableRequest(SdkBaseModel):
    value: str
    """The value of the environment variable"""


class ContextEnvironmentVariableRequestDict(TypedDict):
    value: str
