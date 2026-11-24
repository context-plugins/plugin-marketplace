from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.default_action import DefaultActionOrStr


class UserPoolConfig(SdkBaseModel):
    user_pool_id: str = Field(alias="userPoolId")
    """The user pool ID."""

    aws_region: str = Field(alias="awsRegion")
    """The Amazon Web Services Region in which the user pool was created."""

    default_action: DefaultActionOrStr = Field(alias="defaultAction")
    """The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool
    authentication doesn't match the Amazon Cognito user pool configuration."""

    app_id_client_regex: Optional[str] = Field(default=UNSET, alias="appIdClientRegex")
    """A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set,
    no filtering is applied."""


class UserPoolConfigDict(TypedDict):
    user_pool_id: str
    aws_region: str
    default_action: DefaultActionOrStr
    app_id_client_regex: NotRequired[str]
