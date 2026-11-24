from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ApisEnvironmentVariablesRequest(SdkBaseModel):
    environment_variables: dict[str, str] = Field(alias="environmentVariables")
    """The list of environmental variables to add to the API. When creating an environmental variable key-value pair, it
    must follow the additional constraints below: Keys must begin with a letter. Keys must be at least two characters
    long. Keys can only contain letters, numbers, and the underscore character (_). Values can be up to 512 characters
    long. You can configure up to 50 key-value pairs in a GraphQL API. You can create a list of environmental variables
    by adding it to the environmentVariables payload as a list in the format {"key1":"value1","key2":"value2", …}. Note
    that each call of the Put"""


class V1ApisEnvironmentVariablesRequestDict(TypedDict):
    environment_variables: dict[str, str]
