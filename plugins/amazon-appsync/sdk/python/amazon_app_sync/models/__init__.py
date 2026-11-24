from . import enums
from .access_denied_exception import AccessDeniedException, AccessDeniedExceptionDict
from .access_denied_exception_error import AccessDeniedExceptionError, AccessDeniedExceptionErrorDict
from .additional_authentication_provider import AdditionalAuthenticationProvider, AdditionalAuthenticationProviderDict
from .api import Api, ApiDict
from .api_association import ApiAssociation, ApiAssociationDict
from .api_cache import ApiCache, ApiCacheDict
from .api_key import ApiKey, ApiKeyDict
from .api_key_limit_exceeded_exception import ApiKeyLimitExceededException, ApiKeyLimitExceededExceptionDict
from .api_key_limit_exceeded_exception_error import (
    ApiKeyLimitExceededExceptionError,
    ApiKeyLimitExceededExceptionErrorDict,
)
from .api_key_validity_out_of_bounds_exception import (
    ApiKeyValidityOutOfBoundsException,
    ApiKeyValidityOutOfBoundsExceptionDict,
)
from .api_key_validity_out_of_bounds_exception_error import (
    ApiKeyValidityOutOfBoundsExceptionError,
    ApiKeyValidityOutOfBoundsExceptionErrorDict,
)
from .api_limit_exceeded_exception import ApiLimitExceededException, ApiLimitExceededExceptionDict
from .api_limit_exceeded_exception_error import ApiLimitExceededExceptionError, ApiLimitExceededExceptionErrorDict
from .app_sync_runtime import AppSyncRuntime, AppSyncRuntimeDict
from .associate_api_response import AssociateApiResponse, AssociateApiResponseDict
from .associate_merged_graphql_api_response import (
    AssociateMergedGraphqlApiResponse,
    AssociateMergedGraphqlApiResponseDict,
)
from .associate_source_graphql_api_response import (
    AssociateSourceGraphqlApiResponse,
    AssociateSourceGraphqlApiResponseDict,
)
from .auth_mode import AuthMode, AuthModeDict
from .auth_provider import AuthProvider, AuthProviderDict
from .authorization_config import AuthorizationConfig, AuthorizationConfigDict
from .aws_iam_config import AwsIamConfig, AwsIamConfigDict
from .bad_request_detail import BadRequestDetail, BadRequestDetailDict
from .bad_request_exception import BadRequestException, BadRequestExceptionDict
from .bad_request_exception_error import BadRequestExceptionError, BadRequestExceptionErrorDict
from .caching_config import CachingConfig, CachingConfigDict
from .channel_namespace import ChannelNamespace, ChannelNamespaceDict
from .code_error import CodeError, CodeErrorDict
from .code_error_location import CodeErrorLocation, CodeErrorLocationDict
from .cognito_config import CognitoConfig, CognitoConfigDict
from .cognito_user_pool_config import CognitoUserPoolConfig, CognitoUserPoolConfigDict
from .concurrent_modification_exception import ConcurrentModificationException, ConcurrentModificationExceptionDict
from .concurrent_modification_exception_error import (
    ConcurrentModificationExceptionError,
    ConcurrentModificationExceptionErrorDict,
)
from .create_api_cache_response import CreateApiCacheResponse, CreateApiCacheResponseDict
from .create_api_key_response import CreateApiKeyResponse, CreateApiKeyResponseDict
from .create_api_response import CreateApiResponse, CreateApiResponseDict
from .create_channel_namespace_response import CreateChannelNamespaceResponse, CreateChannelNamespaceResponseDict
from .create_data_source_response import CreateDataSourceResponse, CreateDataSourceResponseDict
from .create_domain_name_response import CreateDomainNameResponse, CreateDomainNameResponseDict
from .create_function_response import CreateFunctionResponse, CreateFunctionResponseDict
from .create_graphql_api_response import CreateGraphqlApiResponse, CreateGraphqlApiResponseDict
from .create_resolver_response import CreateResolverResponse, CreateResolverResponseDict
from .create_type_response import CreateTypeResponse, CreateTypeResponseDict
from .data_source import DataSource, DataSourceDict
from .data_source_introspection_model import DataSourceIntrospectionModel, DataSourceIntrospectionModelDict
from .data_source_introspection_model_field import (
    DataSourceIntrospectionModelField,
    DataSourceIntrospectionModelFieldDict,
)
from .data_source_introspection_model_field_type import (
    DataSourceIntrospectionModelFieldType,
    DataSourceIntrospectionModelFieldTypeDict,
)
from .data_source_introspection_model_index import (
    DataSourceIntrospectionModelIndex,
    DataSourceIntrospectionModelIndexDict,
)
from .data_source_introspection_result import DataSourceIntrospectionResult, DataSourceIntrospectionResultDict
from .delta_sync_config import DeltaSyncConfig, DeltaSyncConfigDict
from .disassociate_merged_graphql_api_response import (
    DisassociateMergedGraphqlApiResponse,
    DisassociateMergedGraphqlApiResponseDict,
)
from .disassociate_source_graphql_api_response import (
    DisassociateSourceGraphqlApiResponse,
    DisassociateSourceGraphqlApiResponseDict,
)
from .domain_name_config import DomainNameConfig, DomainNameConfigDict
from .dynamodb_data_source_config import DynamodbDataSourceConfig, DynamodbDataSourceConfigDict
from .elasticsearch_data_source_config import ElasticsearchDataSourceConfig, ElasticsearchDataSourceConfigDict
from .enhanced_metrics_config import EnhancedMetricsConfig, EnhancedMetricsConfigDict
from .error_detail import ErrorDetail, ErrorDetailDict
from .evaluate_code_error_detail import EvaluateCodeErrorDetail, EvaluateCodeErrorDetailDict
from .evaluate_code_response import EvaluateCodeResponse, EvaluateCodeResponseDict
from .evaluate_mapping_template_response import EvaluateMappingTemplateResponse, EvaluateMappingTemplateResponseDict
from .event_bridge_data_source_config import EventBridgeDataSourceConfig, EventBridgeDataSourceConfigDict
from .event_config import EventConfig, EventConfigDict
from .event_log_config import EventLogConfig, EventLogConfigDict
from .function_configuration import FunctionConfiguration, FunctionConfigurationDict
from .get_api_association_response import GetApiAssociationResponse, GetApiAssociationResponseDict
from .get_api_cache_response import GetApiCacheResponse, GetApiCacheResponseDict
from .get_api_response import GetApiResponse, GetApiResponseDict
from .get_channel_namespace_response import GetChannelNamespaceResponse, GetChannelNamespaceResponseDict
from .get_data_source_introspection_response import (
    GetDataSourceIntrospectionResponse,
    GetDataSourceIntrospectionResponseDict,
)
from .get_data_source_response import GetDataSourceResponse, GetDataSourceResponseDict
from .get_domain_name_response import GetDomainNameResponse, GetDomainNameResponseDict
from .get_function_response import GetFunctionResponse, GetFunctionResponseDict
from .get_graphql_api_environment_variables_response import (
    GetGraphqlApiEnvironmentVariablesResponse,
    GetGraphqlApiEnvironmentVariablesResponseDict,
)
from .get_graphql_api_response import GetGraphqlApiResponse, GetGraphqlApiResponseDict
from .get_introspection_schema_response import GetIntrospectionSchemaResponse, GetIntrospectionSchemaResponseDict
from .get_resolver_response import GetResolverResponse, GetResolverResponseDict
from .get_schema_creation_status_response import GetSchemaCreationStatusResponse, GetSchemaCreationStatusResponseDict
from .get_source_api_association_response import GetSourceApiAssociationResponse, GetSourceApiAssociationResponseDict
from .get_type_response import GetTypeResponse, GetTypeResponseDict
from .graph_ql_schema_exception import GraphQlSchemaException, GraphQlSchemaExceptionDict
from .graph_ql_schema_exception_error import GraphQlSchemaExceptionError, GraphQlSchemaExceptionErrorDict
from .graphql_api import GraphqlApi, GraphqlApiDict
from .handler_config import HandlerConfig, HandlerConfigDict
from .handler_configs import HandlerConfigs, HandlerConfigsDict
from .http_data_source_config import HttpDataSourceConfig, HttpDataSourceConfigDict
from .integration import Integration, IntegrationDict
from .internal_failure_exception import InternalFailureException, InternalFailureExceptionDict
from .internal_failure_exception_error import InternalFailureExceptionError, InternalFailureExceptionErrorDict
from .lambda_authorizer_config import LambdaAuthorizerConfig, LambdaAuthorizerConfigDict
from .lambda_config import LambdaConfig, LambdaConfigDict
from .lambda_conflict_handler_config import LambdaConflictHandlerConfig, LambdaConflictHandlerConfigDict
from .lambda_data_source_config import LambdaDataSourceConfig, LambdaDataSourceConfigDict
from .limit_exceeded_exception import LimitExceededException, LimitExceededExceptionDict
from .limit_exceeded_exception_error import LimitExceededExceptionError, LimitExceededExceptionErrorDict
from .list_api_keys_response import ListApiKeysResponse, ListApiKeysResponseDict
from .list_apis_response import ListApisResponse, ListApisResponseDict
from .list_channel_namespaces_response import ListChannelNamespacesResponse, ListChannelNamespacesResponseDict
from .list_data_sources_response import ListDataSourcesResponse, ListDataSourcesResponseDict
from .list_domain_names_response import ListDomainNamesResponse, ListDomainNamesResponseDict
from .list_functions_response import ListFunctionsResponse, ListFunctionsResponseDict
from .list_graphql_apis_response import ListGraphqlApisResponse, ListGraphqlApisResponseDict
from .list_resolvers_by_function_response import ListResolversByFunctionResponse, ListResolversByFunctionResponseDict
from .list_resolvers_response import ListResolversResponse, ListResolversResponseDict
from .list_source_api_associations_response import (
    ListSourceApiAssociationsResponse,
    ListSourceApiAssociationsResponseDict,
)
from .list_tags_for_resource_response import ListTagsForResourceResponse, ListTagsForResourceResponseDict
from .list_types_by_association_response import ListTypesByAssociationResponse, ListTypesByAssociationResponseDict
from .list_types_response import ListTypesResponse, ListTypesResponseDict
from .log_config import LogConfig, LogConfigDict
from .not_found_exception import NotFoundException, NotFoundExceptionDict
from .not_found_exception_error import NotFoundExceptionError, NotFoundExceptionErrorDict
from .open_id_connect_config import OpenIdConnectConfig, OpenIdConnectConfigDict
from .open_search_service_data_source_config import (
    OpenSearchServiceDataSourceConfig,
    OpenSearchServiceDataSourceConfigDict,
)
from .pipeline_config import PipelineConfig, PipelineConfigDict
from .put_graphql_api_environment_variables_response import (
    PutGraphqlApiEnvironmentVariablesResponse,
    PutGraphqlApiEnvironmentVariablesResponseDict,
)
from .rds_data_api_config import RdsDataApiConfig, RdsDataApiConfigDict
from .rds_http_endpoint_config import RdsHttpEndpointConfig, RdsHttpEndpointConfigDict
from .relational_database_data_source_config import (
    RelationalDatabaseDataSourceConfig,
    RelationalDatabaseDataSourceConfigDict,
)
from .resolver import Resolver, ResolverDict
from .service_quota_exceeded_exception import ServiceQuotaExceededException, ServiceQuotaExceededExceptionDict
from .service_quota_exceeded_exception_error import (
    ServiceQuotaExceededExceptionError,
    ServiceQuotaExceededExceptionErrorDict,
)
from .source_api_association import SourceApiAssociation, SourceApiAssociationDict
from .source_api_association_config import SourceApiAssociationConfig, SourceApiAssociationConfigDict
from .source_api_association_summary import SourceApiAssociationSummary, SourceApiAssociationSummaryDict
from .start_data_source_introspection_response import (
    StartDataSourceIntrospectionResponse,
    StartDataSourceIntrospectionResponseDict,
)
from .start_schema_creation_response import StartSchemaCreationResponse, StartSchemaCreationResponseDict
from .start_schema_merge_response import StartSchemaMergeResponse, StartSchemaMergeResponseDict
from .sync_config import SyncConfig, SyncConfigDict
from .type_aws_app_sync_types_api import TypeAwsAppSyncTypesApi, TypeAwsAppSyncTypesApiDict
from .unauthorized_exception import UnauthorizedException, UnauthorizedExceptionDict
from .unauthorized_exception_error import UnauthorizedExceptionError, UnauthorizedExceptionErrorDict
from .update_api_cache_response import UpdateApiCacheResponse, UpdateApiCacheResponseDict
from .update_api_key_response import UpdateApiKeyResponse, UpdateApiKeyResponseDict
from .update_api_response import UpdateApiResponse, UpdateApiResponseDict
from .update_channel_namespace_response import UpdateChannelNamespaceResponse, UpdateChannelNamespaceResponseDict
from .update_data_source_response import UpdateDataSourceResponse, UpdateDataSourceResponseDict
from .update_domain_name_response import UpdateDomainNameResponse, UpdateDomainNameResponseDict
from .update_function_response import UpdateFunctionResponse, UpdateFunctionResponseDict
from .update_graphql_api_response import UpdateGraphqlApiResponse, UpdateGraphqlApiResponseDict
from .update_resolver_response import UpdateResolverResponse, UpdateResolverResponseDict
from .update_source_api_association_response import (
    UpdateSourceApiAssociationResponse,
    UpdateSourceApiAssociationResponseDict,
)
from .update_type_response import UpdateTypeResponse, UpdateTypeResponseDict
from .user_pool_config import UserPoolConfig, UserPoolConfigDict
from .v1_apis_api_caches_request import V1ApisApiCachesRequest, V1ApisApiCachesRequestDict
from .v1_apis_api_caches_update_request import V1ApisApiCachesUpdateRequest, V1ApisApiCachesUpdateRequestDict
from .v1_apis_apikeys_request import V1ApisApikeysRequest, V1ApisApikeysRequestDict
from .v1_apis_apikeys_request1 import V1ApisApikeysRequest1, V1ApisApikeysRequest1Dict
from .v1_apis_datasources_request import V1ApisDatasourcesRequest, V1ApisDatasourcesRequestDict
from .v1_apis_datasources_request1 import V1ApisDatasourcesRequest1, V1ApisDatasourcesRequest1Dict
from .v1_apis_environment_variables_request import (
    V1ApisEnvironmentVariablesRequest,
    V1ApisEnvironmentVariablesRequestDict,
)
from .v1_apis_functions_request import V1ApisFunctionsRequest, V1ApisFunctionsRequestDict
from .v1_apis_functions_request1 import V1ApisFunctionsRequest1, V1ApisFunctionsRequest1Dict
from .v1_apis_request import V1ApisRequest, V1ApisRequestDict
from .v1_apis_request1 import V1ApisRequest1, V1ApisRequest1Dict
from .v1_apis_schemacreation_request import V1ApisSchemacreationRequest, V1ApisSchemacreationRequestDict
from .v1_apis_types_request import V1ApisTypesRequest, V1ApisTypesRequestDict
from .v1_apis_types_request1 import V1ApisTypesRequest1, V1ApisTypesRequest1Dict
from .v1_apis_types_resolvers_field_name_request import (
    V1ApisTypesResolversFieldNameRequest,
    V1ApisTypesResolversFieldNameRequestDict,
)
from .v1_apis_types_resolvers_request import V1ApisTypesResolversRequest, V1ApisTypesResolversRequestDict
from .v1_dataplane_evaluatecode_request import V1DataplaneEvaluatecodeRequest, V1DataplaneEvaluatecodeRequestDict
from .v1_dataplane_evaluatetemplate_request import (
    V1DataplaneEvaluatetemplateRequest,
    V1DataplaneEvaluatetemplateRequestDict,
)
from .v1_datasources_introspections_request import (
    V1DatasourcesIntrospectionsRequest,
    V1DatasourcesIntrospectionsRequestDict,
)
from .v1_domainnames_apiassociation_request import (
    V1DomainnamesApiassociationRequest,
    V1DomainnamesApiassociationRequestDict,
)
from .v1_domainnames_request import V1DomainnamesRequest, V1DomainnamesRequestDict
from .v1_domainnames_request1 import V1DomainnamesRequest1, V1DomainnamesRequest1Dict
from .v1_merged_apis_source_api_associations_request import (
    V1MergedApisSourceApiAssociationsRequest,
    V1MergedApisSourceApiAssociationsRequestDict,
)
from .v1_merged_apis_source_api_associations_request1 import (
    V1MergedApisSourceApiAssociationsRequest1,
    V1MergedApisSourceApiAssociationsRequest1Dict,
)
from .v1_source_apis_merged_api_associations_request import (
    V1SourceApisMergedApiAssociationsRequest,
    V1SourceApisMergedApiAssociationsRequestDict,
)
from .v1_tags_request import V1TagsRequest, V1TagsRequestDict
from .v2_apis_channel_namespaces_request import V2ApisChannelNamespacesRequest, V2ApisChannelNamespacesRequestDict
from .v2_apis_channel_namespaces_request1 import V2ApisChannelNamespacesRequest1, V2ApisChannelNamespacesRequest1Dict
from .v2_apis_request import V2ApisRequest, V2ApisRequestDict
from .v2_apis_request1 import V2ApisRequest1, V2ApisRequest1Dict

__all__ = [
    "enums",
    "AccessDeniedException",
    "AccessDeniedExceptionDict",
    "AccessDeniedExceptionError",
    "AccessDeniedExceptionErrorDict",
    "AdditionalAuthenticationProvider",
    "AdditionalAuthenticationProviderDict",
    "Api",
    "ApiAssociation",
    "ApiAssociationDict",
    "ApiCache",
    "ApiCacheDict",
    "ApiDict",
    "ApiKey",
    "ApiKeyDict",
    "ApiKeyLimitExceededException",
    "ApiKeyLimitExceededExceptionDict",
    "ApiKeyLimitExceededExceptionError",
    "ApiKeyLimitExceededExceptionErrorDict",
    "ApiKeyValidityOutOfBoundsException",
    "ApiKeyValidityOutOfBoundsExceptionDict",
    "ApiKeyValidityOutOfBoundsExceptionError",
    "ApiKeyValidityOutOfBoundsExceptionErrorDict",
    "ApiLimitExceededException",
    "ApiLimitExceededExceptionDict",
    "ApiLimitExceededExceptionError",
    "ApiLimitExceededExceptionErrorDict",
    "AppSyncRuntime",
    "AppSyncRuntimeDict",
    "AssociateApiResponse",
    "AssociateApiResponseDict",
    "AssociateMergedGraphqlApiResponse",
    "AssociateMergedGraphqlApiResponseDict",
    "AssociateSourceGraphqlApiResponse",
    "AssociateSourceGraphqlApiResponseDict",
    "AuthMode",
    "AuthModeDict",
    "AuthProvider",
    "AuthProviderDict",
    "AuthorizationConfig",
    "AuthorizationConfigDict",
    "AwsIamConfig",
    "AwsIamConfigDict",
    "BadRequestDetail",
    "BadRequestDetailDict",
    "BadRequestException",
    "BadRequestExceptionDict",
    "BadRequestExceptionError",
    "BadRequestExceptionErrorDict",
    "CachingConfig",
    "CachingConfigDict",
    "ChannelNamespace",
    "ChannelNamespaceDict",
    "CodeError",
    "CodeErrorDict",
    "CodeErrorLocation",
    "CodeErrorLocationDict",
    "CognitoConfig",
    "CognitoConfigDict",
    "CognitoUserPoolConfig",
    "CognitoUserPoolConfigDict",
    "ConcurrentModificationException",
    "ConcurrentModificationExceptionDict",
    "ConcurrentModificationExceptionError",
    "ConcurrentModificationExceptionErrorDict",
    "CreateApiCacheResponse",
    "CreateApiCacheResponseDict",
    "CreateApiKeyResponse",
    "CreateApiKeyResponseDict",
    "CreateApiResponse",
    "CreateApiResponseDict",
    "CreateChannelNamespaceResponse",
    "CreateChannelNamespaceResponseDict",
    "CreateDataSourceResponse",
    "CreateDataSourceResponseDict",
    "CreateDomainNameResponse",
    "CreateDomainNameResponseDict",
    "CreateFunctionResponse",
    "CreateFunctionResponseDict",
    "CreateGraphqlApiResponse",
    "CreateGraphqlApiResponseDict",
    "CreateResolverResponse",
    "CreateResolverResponseDict",
    "CreateTypeResponse",
    "CreateTypeResponseDict",
    "DataSource",
    "DataSourceDict",
    "DataSourceIntrospectionModel",
    "DataSourceIntrospectionModelDict",
    "DataSourceIntrospectionModelField",
    "DataSourceIntrospectionModelFieldDict",
    "DataSourceIntrospectionModelFieldType",
    "DataSourceIntrospectionModelFieldTypeDict",
    "DataSourceIntrospectionModelIndex",
    "DataSourceIntrospectionModelIndexDict",
    "DataSourceIntrospectionResult",
    "DataSourceIntrospectionResultDict",
    "DeltaSyncConfig",
    "DeltaSyncConfigDict",
    "DisassociateMergedGraphqlApiResponse",
    "DisassociateMergedGraphqlApiResponseDict",
    "DisassociateSourceGraphqlApiResponse",
    "DisassociateSourceGraphqlApiResponseDict",
    "DomainNameConfig",
    "DomainNameConfigDict",
    "DynamodbDataSourceConfig",
    "DynamodbDataSourceConfigDict",
    "ElasticsearchDataSourceConfig",
    "ElasticsearchDataSourceConfigDict",
    "EnhancedMetricsConfig",
    "EnhancedMetricsConfigDict",
    "ErrorDetail",
    "ErrorDetailDict",
    "EvaluateCodeErrorDetail",
    "EvaluateCodeErrorDetailDict",
    "EvaluateCodeResponse",
    "EvaluateCodeResponseDict",
    "EvaluateMappingTemplateResponse",
    "EvaluateMappingTemplateResponseDict",
    "EventBridgeDataSourceConfig",
    "EventBridgeDataSourceConfigDict",
    "EventConfig",
    "EventConfigDict",
    "EventLogConfig",
    "EventLogConfigDict",
    "FunctionConfiguration",
    "FunctionConfigurationDict",
    "GetApiAssociationResponse",
    "GetApiAssociationResponseDict",
    "GetApiCacheResponse",
    "GetApiCacheResponseDict",
    "GetApiResponse",
    "GetApiResponseDict",
    "GetChannelNamespaceResponse",
    "GetChannelNamespaceResponseDict",
    "GetDataSourceIntrospectionResponse",
    "GetDataSourceIntrospectionResponseDict",
    "GetDataSourceResponse",
    "GetDataSourceResponseDict",
    "GetDomainNameResponse",
    "GetDomainNameResponseDict",
    "GetFunctionResponse",
    "GetFunctionResponseDict",
    "GetGraphqlApiEnvironmentVariablesResponse",
    "GetGraphqlApiEnvironmentVariablesResponseDict",
    "GetGraphqlApiResponse",
    "GetGraphqlApiResponseDict",
    "GetIntrospectionSchemaResponse",
    "GetIntrospectionSchemaResponseDict",
    "GetResolverResponse",
    "GetResolverResponseDict",
    "GetSchemaCreationStatusResponse",
    "GetSchemaCreationStatusResponseDict",
    "GetSourceApiAssociationResponse",
    "GetSourceApiAssociationResponseDict",
    "GetTypeResponse",
    "GetTypeResponseDict",
    "GraphQlSchemaException",
    "GraphQlSchemaExceptionDict",
    "GraphQlSchemaExceptionError",
    "GraphQlSchemaExceptionErrorDict",
    "GraphqlApi",
    "GraphqlApiDict",
    "HandlerConfig",
    "HandlerConfigDict",
    "HandlerConfigs",
    "HandlerConfigsDict",
    "HttpDataSourceConfig",
    "HttpDataSourceConfigDict",
    "Integration",
    "IntegrationDict",
    "InternalFailureException",
    "InternalFailureExceptionDict",
    "InternalFailureExceptionError",
    "InternalFailureExceptionErrorDict",
    "LambdaAuthorizerConfig",
    "LambdaAuthorizerConfigDict",
    "LambdaConfig",
    "LambdaConfigDict",
    "LambdaConflictHandlerConfig",
    "LambdaConflictHandlerConfigDict",
    "LambdaDataSourceConfig",
    "LambdaDataSourceConfigDict",
    "LimitExceededException",
    "LimitExceededExceptionDict",
    "LimitExceededExceptionError",
    "LimitExceededExceptionErrorDict",
    "ListApiKeysResponse",
    "ListApiKeysResponseDict",
    "ListApisResponse",
    "ListApisResponseDict",
    "ListChannelNamespacesResponse",
    "ListChannelNamespacesResponseDict",
    "ListDataSourcesResponse",
    "ListDataSourcesResponseDict",
    "ListDomainNamesResponse",
    "ListDomainNamesResponseDict",
    "ListFunctionsResponse",
    "ListFunctionsResponseDict",
    "ListGraphqlApisResponse",
    "ListGraphqlApisResponseDict",
    "ListResolversByFunctionResponse",
    "ListResolversByFunctionResponseDict",
    "ListResolversResponse",
    "ListResolversResponseDict",
    "ListSourceApiAssociationsResponse",
    "ListSourceApiAssociationsResponseDict",
    "ListTagsForResourceResponse",
    "ListTagsForResourceResponseDict",
    "ListTypesByAssociationResponse",
    "ListTypesByAssociationResponseDict",
    "ListTypesResponse",
    "ListTypesResponseDict",
    "LogConfig",
    "LogConfigDict",
    "NotFoundException",
    "NotFoundExceptionDict",
    "NotFoundExceptionError",
    "NotFoundExceptionErrorDict",
    "OpenIdConnectConfig",
    "OpenIdConnectConfigDict",
    "OpenSearchServiceDataSourceConfig",
    "OpenSearchServiceDataSourceConfigDict",
    "PipelineConfig",
    "PipelineConfigDict",
    "PutGraphqlApiEnvironmentVariablesResponse",
    "PutGraphqlApiEnvironmentVariablesResponseDict",
    "RdsDataApiConfig",
    "RdsDataApiConfigDict",
    "RdsHttpEndpointConfig",
    "RdsHttpEndpointConfigDict",
    "RelationalDatabaseDataSourceConfig",
    "RelationalDatabaseDataSourceConfigDict",
    "Resolver",
    "ResolverDict",
    "ServiceQuotaExceededException",
    "ServiceQuotaExceededExceptionDict",
    "ServiceQuotaExceededExceptionError",
    "ServiceQuotaExceededExceptionErrorDict",
    "SourceApiAssociation",
    "SourceApiAssociationConfig",
    "SourceApiAssociationConfigDict",
    "SourceApiAssociationDict",
    "SourceApiAssociationSummary",
    "SourceApiAssociationSummaryDict",
    "StartDataSourceIntrospectionResponse",
    "StartDataSourceIntrospectionResponseDict",
    "StartSchemaCreationResponse",
    "StartSchemaCreationResponseDict",
    "StartSchemaMergeResponse",
    "StartSchemaMergeResponseDict",
    "SyncConfig",
    "SyncConfigDict",
    "TypeAwsAppSyncTypesApi",
    "TypeAwsAppSyncTypesApiDict",
    "UnauthorizedException",
    "UnauthorizedExceptionDict",
    "UnauthorizedExceptionError",
    "UnauthorizedExceptionErrorDict",
    "UpdateApiCacheResponse",
    "UpdateApiCacheResponseDict",
    "UpdateApiKeyResponse",
    "UpdateApiKeyResponseDict",
    "UpdateApiResponse",
    "UpdateApiResponseDict",
    "UpdateChannelNamespaceResponse",
    "UpdateChannelNamespaceResponseDict",
    "UpdateDataSourceResponse",
    "UpdateDataSourceResponseDict",
    "UpdateDomainNameResponse",
    "UpdateDomainNameResponseDict",
    "UpdateFunctionResponse",
    "UpdateFunctionResponseDict",
    "UpdateGraphqlApiResponse",
    "UpdateGraphqlApiResponseDict",
    "UpdateResolverResponse",
    "UpdateResolverResponseDict",
    "UpdateSourceApiAssociationResponse",
    "UpdateSourceApiAssociationResponseDict",
    "UpdateTypeResponse",
    "UpdateTypeResponseDict",
    "UserPoolConfig",
    "UserPoolConfigDict",
    "V1ApisApiCachesRequest",
    "V1ApisApiCachesRequestDict",
    "V1ApisApiCachesUpdateRequest",
    "V1ApisApiCachesUpdateRequestDict",
    "V1ApisApikeysRequest",
    "V1ApisApikeysRequest1",
    "V1ApisApikeysRequest1Dict",
    "V1ApisApikeysRequestDict",
    "V1ApisDatasourcesRequest",
    "V1ApisDatasourcesRequest1",
    "V1ApisDatasourcesRequest1Dict",
    "V1ApisDatasourcesRequestDict",
    "V1ApisEnvironmentVariablesRequest",
    "V1ApisEnvironmentVariablesRequestDict",
    "V1ApisFunctionsRequest",
    "V1ApisFunctionsRequest1",
    "V1ApisFunctionsRequest1Dict",
    "V1ApisFunctionsRequestDict",
    "V1ApisRequest",
    "V1ApisRequest1",
    "V1ApisRequest1Dict",
    "V1ApisRequestDict",
    "V1ApisSchemacreationRequest",
    "V1ApisSchemacreationRequestDict",
    "V1ApisTypesRequest",
    "V1ApisTypesRequest1",
    "V1ApisTypesRequest1Dict",
    "V1ApisTypesRequestDict",
    "V1ApisTypesResolversFieldNameRequest",
    "V1ApisTypesResolversFieldNameRequestDict",
    "V1ApisTypesResolversRequest",
    "V1ApisTypesResolversRequestDict",
    "V1DataplaneEvaluatecodeRequest",
    "V1DataplaneEvaluatecodeRequestDict",
    "V1DataplaneEvaluatetemplateRequest",
    "V1DataplaneEvaluatetemplateRequestDict",
    "V1DatasourcesIntrospectionsRequest",
    "V1DatasourcesIntrospectionsRequestDict",
    "V1DomainnamesApiassociationRequest",
    "V1DomainnamesApiassociationRequestDict",
    "V1DomainnamesRequest",
    "V1DomainnamesRequest1",
    "V1DomainnamesRequest1Dict",
    "V1DomainnamesRequestDict",
    "V1MergedApisSourceApiAssociationsRequest",
    "V1MergedApisSourceApiAssociationsRequest1",
    "V1MergedApisSourceApiAssociationsRequest1Dict",
    "V1MergedApisSourceApiAssociationsRequestDict",
    "V1SourceApisMergedApiAssociationsRequest",
    "V1SourceApisMergedApiAssociationsRequestDict",
    "V1TagsRequest",
    "V1TagsRequestDict",
    "V2ApisChannelNamespacesRequest",
    "V2ApisChannelNamespacesRequest1",
    "V2ApisChannelNamespacesRequest1Dict",
    "V2ApisChannelNamespacesRequestDict",
    "V2ApisRequest",
    "V2ApisRequest1",
    "V2ApisRequest1Dict",
    "V2ApisRequestDict",
]
