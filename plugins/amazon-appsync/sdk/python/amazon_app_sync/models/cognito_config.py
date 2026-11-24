from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CognitoConfig(SdkBaseModel):
    user_pool_id: str = Field(alias="userPoolId")
    """The user pool ID."""

    aws_region: str = Field(alias="awsRegion")
    """The Amazon Web Services Region in which the user pool was created."""

    app_id_client_regex: Optional[str] = Field(default=UNSET, alias="appIdClientRegex")
    """A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set,
    no filtering is applied."""


class CognitoConfigDict(TypedDict):
    user_pool_id: str
    aws_region: str
    app_id_client_regex: NotRequired[str]
