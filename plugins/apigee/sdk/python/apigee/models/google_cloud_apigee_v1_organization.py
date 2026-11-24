from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_type import BillingTypeOrStr
from .enums.runtime_type import RuntimeTypeOrStr
from .enums.state2 import State2OrStr
from .enums.subscription_plan import SubscriptionPlanOrStr
from .enums.subscription_type import SubscriptionTypeOrStr
from .enums.type import TypeOrStr
from .google_cloud_apigee_v1_addons_config3 import (
    GoogleCloudApigeeV1AddonsConfig3,
    GoogleCloudApigeeV1AddonsConfig3Dict,
)
from .google_cloud_apigee_v1_properties4 import GoogleCloudApigeeV1Properties4, GoogleCloudApigeeV1Properties4Dict


class GoogleCloudApigeeV1Organization(SdkBaseModel):
    subscription_plan: Optional[SubscriptionPlanOrStr] = Field(default=UNSET, alias="subscriptionPlan")
    """Output only. Subscription plan that the customer has purchased. Output only."""

    apigee_project_id: Optional[str] = Field(default=UNSET, alias="apigeeProjectId")
    """Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the
    Service Attachment when using private service connect with Apigee."""

    attributes: Optional[list[str]] = UNSET
    """Not used by Apigee."""

    properties: Optional[GoogleCloudApigeeV1Properties4] = UNSET
    """Optional. Properties defined in the Apigee organization profile."""

    authorized_network: Optional[str] = Field(default=UNSET, alias="authorizedNetwork")
    """Optional. Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See
    `Getting started with the Service Networking API
    <https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started>`__. Valid only when
    `RuntimeType <#RuntimeType>`__ is set to ``CLOUD``. The value must be set before the creation of a runtime instance
    and can be updated only when there are no runtime instances. For example: ``default``. When changing
    authorizedNetwork, you must reconfigure VPC peering. After VPC peering with previous network is deleted, `run the
    following command <https://cloud.google.com/sdk/gcloud/reference/services/vpc-peerings/delete>`__: ``gcloud services
    vpc-peerings delete --network=NETWORK``, where ``NETWORK`` is the name of the previous network. This will delete the
    previous Service Networking. Otherwise, you will get the following error: ``The resource 'projects/...-tp' is
    already linked to another shared VPC host 'projects/...-tp``. Apigee also supports shared VPC (that is, the host
    network project is not the same as the one that is peering with Apigee). See `Shared VPC overview
    <https://cloud.google.com/vpc/docs/shared-vpc>`__. To use a shared VPC network, use the following format:
    ``projects/{host-project-id}/{region}/networks/{network-name}``. For example:
    ``projects/my-sharedvpc-host/global/networks/mynetwork`` **Note:** Not supported for Apigee hybrid."""

    runtime_type: Optional[RuntimeTypeOrStr] = Field(default=UNSET, alias="runtimeType")
    """Required. Runtime type of the Apigee organization based on the Apigee subscription purchased."""

    environments: Optional[list[str]] = UNSET
    """Output only. List of environments in the Apigee organization."""

    customer_name: Optional[str] = Field(default=UNSET, alias="customerName")
    """Not used by Apigee."""

    name: Optional[str] = UNSET
    """Output only. Name of the Apigee organization."""

    subscription_type: Optional[SubscriptionTypeOrStr] = Field(default=UNSET, alias="subscriptionType")
    """Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee
    organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full
    subscription has been purchased). See `Apigee pricing <https://cloud.google.com/apigee/pricing/>`__."""

    state: Optional[State2OrStr] = UNSET
    """Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use."""

    disable_vpc_peering: Optional[bool] = Field(default=UNSET, alias="disableVpcPeering")
    """Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between
    the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on
    the consumer project is not provided, in which case the flag should be set to true. The value must be set before the
    creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:**
    Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the
    non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary
    flag to enable the transition. Not supported for Apigee hybrid."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name for the Apigee organization. Unused, but reserved for future use."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Not used by Apigee."""

    ca_certificates: Optional[list[str]] = Field(default=UNSET, alias="caCertificates")
    """Output only. Base64-encoded public certificates for the root CA of the Apigee organization. Valid only when
    `RuntimeType <#RuntimeType>`__ is ``CLOUD``. Multiple certificates are used to support certificate rotation."""

    network_egress_restricted: Optional[bool] = Field(default=UNSET, alias="networkEgressRestricted")
    """Optional. Flag that specifies if internet egress is restricted for VPC Service Controls. Valid only when
    runtime_type is ``CLOUD`` and disable_vpc_peering is ``true``."""

    control_plane_encryption_key_name: Optional[str] = Field(default=UNSET, alias="controlPlaneEncryptionKeyName")
    """Optional. Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Only used
    for the data residency region "US" or "EU". If not specified or `BillingType <#BillingType>`__ is ``EVALUATION``, a
    Google-Managed encryption key will be used. Format: ``projects/*/locations/*/keyRings/*/cryptoKeys/*``"""

    api_consumer_data_location: Optional[str] = Field(default=UNSET, alias="apiConsumerDataLocation")
    """Optional. This field is needed only for customers using non-default data residency regions. Apigee stores some
    control plane data only in single region. This field determines which single region Apigee should use. For example:
    "us-west1" when control plane is in US or "europe-west2" when control plane is in EU."""

    description: Optional[str] = UNSET
    """Optional. Description of the Apigee organization."""

    analytics_region: Optional[str] = Field(default=UNSET, alias="analyticsRegion")
    """Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field.
    Primary Google Cloud region for analytics data storage. For valid values, see `Create an Apigee organization
    <https://cloud.google.com/apigee/docs/api-platform/get-started/create-org>`__."""

    expires_at: Optional[str] = Field(default=UNSET, alias="expiresAt")
    """Output only. Time that the Apigee organization is scheduled for deletion."""

    ca_certificate: Optional[str] = Field(default=UNSET, alias="caCertificate")
    """Output only. Deprecated: Use ``ca_certificates`` instead. Base64-encoded public certificate for the root CA of
    the Apigee organization. Valid only when `RuntimeType <#RuntimeType>`__ is ``CLOUD``."""

    api_consumer_data_encryption_key_name: Optional[str] = Field(
        default=UNSET, alias="apiConsumerDataEncryptionKeyName"
    )
    """Optional. Cloud KMS key name used for encrypting API consumer data. If not specified or `BillingType
    <#BillingType>`__ is ``EVALUATION``, a Google-Managed encryption key will be used. Format:
    ``projects/*/locations/*/keyRings/*/cryptoKeys/*``"""

    portal_disabled: Optional[bool] = Field(default=UNSET, alias="portalDisabled")
    """Optional. Configuration for the Portals settings."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Output only. Project ID associated with the Apigee organization."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time that the Apigee organization was last modified in milliseconds since epoch."""

    billing_type: Optional[BillingTypeOrStr] = Field(default=UNSET, alias="billingType")
    """Optional. Billing type of the Apigee organization. See `Apigee pricing
    <https://cloud.google.com/apigee/pricing>`__."""

    addons_config: Optional[GoogleCloudApigeeV1AddonsConfig3] = Field(default=UNSET, alias="addonsConfig")
    """Optional. Addon configurations of the Apigee organization."""

    runtime_database_encryption_key_name: Optional[str] = Field(default=UNSET, alias="runtimeDatabaseEncryptionKeyName")
    """Optional. Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
    Update is not allowed after the organization is created. If not specified or `RuntimeType <#RuntimeType>`__ is
    ``TRIAL``, a Google-Managed encryption key will be used. For example:
    "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time that the Apigee organization was created in milliseconds since epoch."""


class GoogleCloudApigeeV1OrganizationDict(TypedDict):
    subscription_plan: NotRequired[SubscriptionPlanOrStr]
    apigee_project_id: NotRequired[str]
    attributes: NotRequired[list[str]]
    properties: NotRequired[GoogleCloudApigeeV1Properties4Dict]
    authorized_network: NotRequired[str]
    runtime_type: NotRequired[RuntimeTypeOrStr]
    environments: NotRequired[list[str]]
    customer_name: NotRequired[str]
    name: NotRequired[str]
    subscription_type: NotRequired[SubscriptionTypeOrStr]
    state: NotRequired[State2OrStr]
    disable_vpc_peering: NotRequired[bool]
    display_name: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    ca_certificates: NotRequired[list[str]]
    network_egress_restricted: NotRequired[bool]
    control_plane_encryption_key_name: NotRequired[str]
    api_consumer_data_location: NotRequired[str]
    description: NotRequired[str]
    analytics_region: NotRequired[str]
    expires_at: NotRequired[str]
    ca_certificate: NotRequired[str]
    api_consumer_data_encryption_key_name: NotRequired[str]
    portal_disabled: NotRequired[bool]
    project_id: NotRequired[str]
    last_modified_at: NotRequired[str]
    billing_type: NotRequired[BillingTypeOrStr]
    addons_config: NotRequired[GoogleCloudApigeeV1AddonsConfig3Dict]
    runtime_database_encryption_key_name: NotRequired[str]
    created_at: NotRequired[str]
