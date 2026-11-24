from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LambdaAuthorizerConfig(SdkBaseModel):
    authorizer_result_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="authorizerResultTtlInSeconds")
    """The number of seconds a response should be cached for. The default is 0 seconds, which disables caching. If you
    don't specify a value for authorizerResultTtlInSeconds, the default value is used. The maximum value is one hour
    (3600 seconds). The Lambda function can override this by returning a ttlOverride key in its response."""

    authorizer_uri: str = Field(alias="authorizerUri")
    """The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can be a standard
    Lambda ARN, a version ARN (.../v3), or an alias ARN. Note: This Lambda function must have the following
    resource-based policy assigned to it. When configuring Lambda authorizers in the console, this is done for you. To
    use the Command Line Interface (CLI), run the following: aws lambda add-permission --function-name
    "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal
    appsync.amazonaws.com --action lambda:InvokeFunction"""

    identity_validation_expression: Optional[str] = Field(default=UNSET, alias="identityValidationExpression")
    """A regular expression for validation of tokens before the Lambda function is called."""


class LambdaAuthorizerConfigDict(TypedDict):
    authorizer_result_ttl_in_seconds: NotRequired[int]
    authorizer_uri: str
    identity_validation_expression: NotRequired[str]
