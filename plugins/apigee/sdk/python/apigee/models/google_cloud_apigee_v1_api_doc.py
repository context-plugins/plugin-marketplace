from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApiDoc(SdkBaseModel):
    """``ApiDoc`` represents an API catalog item. Catalog items are used in two ways in a portal: - Users can browse and
    interact with a visual representation of the API documentation - The ``api_product_name`` field provides a link to a
    backing [API product] (/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). Through this link,
    portal users can create and manage developer apps linked to one or more API products."""

    site_id: Optional[str] = Field(default=UNSET, alias="siteId")
    """Output only. The ID of the parent portal."""

    anon_allowed: Optional[bool] = Field(default=UNSET, alias="anonAllowed")
    """Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item has public
    visibility and can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal
    is enrolled in the `audience management feature
    <https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature>`__,
    and this flag is set to false, visibility is set to an indeterminate state and must be explicitly specified in the
    management UI (see `Manage the visibility of an API in your portal
    <https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility>`__). Additionally, when
    enrolled in the audience management feature, updates to this flag will be ignored as visibility permissions must be
    updated in the management UI."""

    spec_id: Optional[str] = Field(default=UNSET, alias="specId")
    """Optional. DEPRECATED: DO NOT USE"""

    graphql_schema_display_name: Optional[str] = Field(default=UNSET, alias="graphqlSchemaDisplayName")
    """Optional. DEPRECATED: manage documentation through the ``getDocumentation`` and ``updateDocumentation``
    methods"""

    published: Optional[bool] = UNSET
    """Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent
    portal is enrolled in the `audience management feature
    <https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature>`__,
    the visibility can be set to public on creation by setting the anonAllowed flag to true or further managed in the
    management UI (see `Manage the visibility of an API in your portal
    <https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility>`__) before it can be
    visible to any users. If not enrolled in the audience management feature, the visibility is managed by the
    ``anonAllowed`` flag."""

    edge_api_product_name: Optional[str] = Field(default=UNSET, alias="edgeAPIProductName")
    """Optional. Immutable. DEPRECATED: use the ``apiProductName`` field instead"""

    visibility: Optional[bool] = UNSET
    """Optional. DEPRECATED: use the ``published`` field instead"""

    category_ids: Optional[list[str]] = Field(default=UNSET, alias="categoryIds")
    """Optional. The IDs of the API categories to which this catalog item belongs."""

    image_url: Optional[str] = Field(default=UNSET, alias="imageUrl")
    """Optional. Location of the image used for the catalog item in the catalog. This can be either an image with an
    external URL or a file path for `image files stored in the portal
    </apigee/docs/api-platform/publish/portal/portal-files">`__, for example, ``/files/book-tree.jpg``. When specifying
    the URL of an external image, the image won't be uploaded to your assets; additionally, loading the image in the
    integrated portal will be subject to its availability, which may be blocked or restricted by `content security
    policies </apigee/docs/api-platform/publish/portal/csp>`__. Max length of file path is 2,083 characters."""

    title: Optional[str] = UNSET
    """Required. The user-facing name of the catalog item. ``title`` must be a non-empty string with a max length of 255
    characters."""

    graphql_endpoint_url: Optional[str] = Field(default=UNSET, alias="graphqlEndpointUrl")
    """Optional. DEPRECATED: manage documentation through the ``getDocumentation`` and ``updateDocumentation``
    methods"""

    api_product_name: Optional[str] = Field(default=UNSET, alias="apiProductName")
    """Required. Immutable. The ``name`` field of the associated `API product
    </apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts>`__. A portal may have only one catalog item
    associated with a given API product."""

    description: Optional[str] = UNSET
    """Optional. Description of the catalog item. Max length is 10,000 characters."""

    graphql_schema: Optional[str] = Field(default=UNSET, alias="graphqlSchema")
    """Optional. DEPRECATED: manage documentation through the ``getDocumentation`` and ``updateDocumentation``
    methods"""

    modified: Optional[str] = UNSET
    """Output only. Time the catalog item was last modified in milliseconds since epoch."""

    require_callback_url: Optional[bool] = Field(default=UNSET, alias="requireCallbackUrl")
    """Optional. Whether a callback URL is required when this catalog item's API product is enabled in a developer app.
    When true, a portal user will be required to input a URL when managing the app (this is typically used for the app's
    OAuth flow)."""

    id: Optional[str] = UNSET
    """Output only. The ID of the catalog item."""


class GoogleCloudApigeeV1ApiDocDict(TypedDict):
    site_id: NotRequired[str]
    anon_allowed: NotRequired[bool]
    spec_id: NotRequired[str]
    graphql_schema_display_name: NotRequired[str]
    published: NotRequired[bool]
    edge_api_product_name: NotRequired[str]
    visibility: NotRequired[bool]
    category_ids: NotRequired[list[str]]
    image_url: NotRequired[str]
    title: NotRequired[str]
    graphql_endpoint_url: NotRequired[str]
    api_product_name: NotRequired[str]
    description: NotRequired[str]
    graphql_schema: NotRequired[str]
    modified: NotRequired[str]
    require_callback_url: NotRequired[bool]
    id: NotRequired[str]
