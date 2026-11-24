from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutGraphqlApiEnvironmentVariablesResponse(SdkBaseModel):
    environment_variables: Optional[dict[str, str]] = Field(default=UNSET, alias="environmentVariables")
    """The payload containing each environmental variable in the "key" : "value" format."""


class PutGraphqlApiEnvironmentVariablesResponseDict(TypedDict):
    environment_variables: NotRequired[dict[str, str]]
