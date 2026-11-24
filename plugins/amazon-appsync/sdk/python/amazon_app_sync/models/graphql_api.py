from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .additional_authentication_provider import AdditionalAuthenticationProvider, AdditionalAuthenticationProviderDict
from .enhanced_metrics_config import EnhancedMetricsConfig, EnhancedMetricsConfigDict
from .enums.api_type import ApiTypeOrStr
from .enums.authentication_type1 import AuthenticationType1OrStr
from .enums.introspection_config import IntrospectionConfigOrStr
from .enums.visibility import VisibilityOrStr
from .lambda_authorizer_config import LambdaAuthorizerConfig, LambdaAuthorizerConfigDict
from .log_config import LogConfig, LogConfigDict
from .open_id_connect_config import OpenIdConnectConfig, OpenIdConnectConfigDict
from .user_pool_config import UserPoolConfig, UserPoolConfigDict


class GraphqlApi(SdkBaseModel):
    name: Optional[str] = UNSET
    """The API name."""

    api_id: Optional[str] = Field(default=UNSET, alias="apiId")
    """The API ID."""

    authentication_type: Optional[AuthenticationType1OrStr] = Field(default=UNSET, alias="authenticationType")
    """The authentication type."""

    log_config: Optional[LogConfig] = Field(default=UNSET, alias="logConfig")
    user_pool_config: Optional[UserPoolConfig] = Field(default=UNSET, alias="userPoolConfig")
    open_id_connect_config: Optional[OpenIdConnectConfig] = Field(default=UNSET, alias="openIDConnectConfig")
    arn: Optional[str] = UNSET
    """The Amazon Resource Name (ARN)."""

    uris: Optional[dict[str, str]] = UNSET
    """The URIs."""

    tags: Optional[dict[str, str]] = UNSET
    """The tags."""

    additional_authentication_providers: Optional[list[AdditionalAuthenticationProvider]] = Field(
        default=UNSET, alias="additionalAuthenticationProviders"
    )
    """A list of additional authentication providers for the GraphqlApi API."""

    xray_enabled: Optional[bool] = Field(default=UNSET, alias="xrayEnabled")
    """A flag indicating whether to use X-Ray tracing for this GraphqlApi."""

    waf_web_acl_arn: Optional[str] = Field(default=UNSET, alias="wafWebAclArn")
    """The ARN of the WAF access control list (ACL) associated with this GraphqlApi, if one exists."""

    lambda_authorizer_config: Optional[LambdaAuthorizerConfig] = Field(default=UNSET, alias="lambdaAuthorizerConfig")
    dns: Optional[dict[str, str]] = UNSET
    """The DNS records for the API."""

    visibility: Optional[VisibilityOrStr] = UNSET
    """Sets the value of the GraphQL API to public (GLOBAL) or private (PRIVATE). If no value is provided, the
    visibility will be set to GLOBAL by default. This value cannot be changed once the API has been created."""

    api_type: Optional[ApiTypeOrStr] = Field(default=UNSET, alias="apiType")
    """The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED)."""

    merged_api_execution_role_arn: Optional[str] = Field(default=UNSET, alias="mergedApiExecutionRoleArn")
    """The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on
    behalf of the Merged API to validate access to source APIs at runtime and to prompt the AUTO_MERGE to update the
    merged API endpoint with the source API changes automatically."""

    owner: Optional[str] = UNSET
    """The account owner of the GraphQL API."""

    owner_contact: Optional[str] = Field(default=UNSET, alias="ownerContact")
    """The owner contact information for an API resource. This field accepts any string input with a length of 0 - 256
    characters."""

    introspection_config: Optional[IntrospectionConfigOrStr] = Field(default=UNSET, alias="introspectionConfig")
    """Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is
    provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the
    operation attempts to use the introspection feature while this field is disabled. For more information about
    introspection, see GraphQL introspection."""

    query_depth_limit: Optional[int] = Field(default=UNSET, alias="queryDepthLimit")
    """The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in
    the body of query. The default value is 0 (or unspecified), which indicates there's no depth limit. If you set a
    limit, it can be between 1 and 75 nested levels. This field will produce a limit error if the operation falls out of
    bounds. Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error,
    the error will be thrown upwards to the first nullable field available."""

    resolver_count_limit: Optional[int] = Field(default=UNSET, alias="resolverCountLimit")
    """The maximum number of resolvers that can be invoked in a single request. The default value is 0 (or unspecified),
    which will set the limit to 10000. When specified, the limit value can be between 1 and 10000. This field will
    produce a limit error if the operation falls out of bounds."""

    enhanced_metrics_config: Optional[EnhancedMetricsConfig] = Field(default=UNSET, alias="enhancedMetricsConfig")


class GraphqlApiDict(TypedDict):
    name: NotRequired[str]
    api_id: NotRequired[str]
    authentication_type: NotRequired[AuthenticationType1OrStr]
    log_config: NotRequired[LogConfigDict]
    user_pool_config: NotRequired[UserPoolConfigDict]
    open_id_connect_config: NotRequired[OpenIdConnectConfigDict]
    arn: NotRequired[str]
    uris: NotRequired[dict[str, str]]
    tags: NotRequired[dict[str, str]]
    additional_authentication_providers: NotRequired[list[AdditionalAuthenticationProviderDict]]
    xray_enabled: NotRequired[bool]
    waf_web_acl_arn: NotRequired[str]
    lambda_authorizer_config: NotRequired[LambdaAuthorizerConfigDict]
    dns: NotRequired[dict[str, str]]
    visibility: NotRequired[VisibilityOrStr]
    api_type: NotRequired[ApiTypeOrStr]
    merged_api_execution_role_arn: NotRequired[str]
    owner: NotRequired[str]
    owner_contact: NotRequired[str]
    introspection_config: NotRequired[IntrospectionConfigOrStr]
    query_depth_limit: NotRequired[int]
    resolver_count_limit: NotRequired[int]
    enhanced_metrics_config: NotRequired[EnhancedMetricsConfigDict]
