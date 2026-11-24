from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.http_method2 import HttpMethod2OrStr
from .header_override import HeaderOverride, HeaderOverrideDict
from .o_auth_token1 import OAuthToken1, OAuthToken1Dict
from .oidc_token2 import OidcToken2, OidcToken2Dict
from .uri_override2 import UriOverride2, UriOverride2Dict


class HttpTarget2(SdkBaseModel):
    """Modifies HTTP target for HTTP tasks."""

    oidc_token: Optional[OidcToken2] = Field(default=UNSET, alias="oidcToken")
    """If specified, an `OIDC <https://developers.google.com/identity/protocols/OpenIDConnect>`__ token is generated and
    attached as an ``Authorization`` header in the HTTP request. This type of authorization can be used for many
    scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself. Note that both
    the service account email and the audience MUST be specified when using the queue-level authorization override."""

    uri_override: Optional[UriOverride2] = Field(default=UNSET, alias="uriOverride")
    """URI override. When specified, overrides the execution URI for all the tasks in the queue."""

    oauth_token: Optional[OAuthToken1] = Field(default=UNSET, alias="oauthToken")
    """If specified, an `OAuth token <https://developers.google.com/identity/protocols/OAuth2>`__ is generated and
    attached as the ``Authorization`` header in the HTTP request. This type of authorization should generally be used
    only when calling Google APIs hosted on *.googleapis.com. Note that both the service account email and the scope
    MUST be specified when using the queue-level authorization override."""

    http_method: Optional[HttpMethod2OrStr] = Field(default=UNSET, alias="httpMethod")
    """The HTTP method to use for the request. When specified, it overrides HttpRequest for the task. Note that if the
    value is set to HttpMethod the HttpRequest of the task will be ignored at execution time."""

    header_overrides: Optional[list[HeaderOverride]] = Field(default=UNSET, alias="headerOverrides")
    """HTTP target headers. This map contains the header field names and values. Headers will be set when running the
    CreateTask and/or BufferTask. These headers represent a subset of the headers that will be configured for the task's
    HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored
    or replaced is: * Several predefined headers, prefixed with "X-CloudTasks-", can be used to define properties of the
    task. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be
    computed by Cloud Tasks. ``Content-Type`` won't be set by Cloud Tasks. You can explicitly set ``Content-Type`` to a
    media type when the task is created. For example, ``Content-Type`` can be set to ``"application/octet-stream"`` or
    ``"application/json"``. The default value is set to ``"application/json"``. * User-Agent: This will be set to
    ``"Google-Cloud-Tasks"``. Headers which can have multiple values (according to RFC2616) can be specified using
    comma-separated values. The size of the headers must be less than 80KB. Queue-level headers to override headers of
    all the tasks in the queue. Do not put business sensitive or personally identifying data in the HTTP Header Override
    Configuration or other similar fields in accordance with Section 12 (Resource Fields) of the `Service Specific Terms
    <https://cloud.google.com/terms/service-terms>`__."""


class HttpTarget2Dict(TypedDict):
    oidc_token: NotRequired[OidcToken2Dict]
    uri_override: NotRequired[UriOverride2Dict]
    oauth_token: NotRequired[OAuthToken1Dict]
    http_method: NotRequired[HttpMethod2OrStr]
    header_overrides: NotRequired[list[HeaderOverrideDict]]
