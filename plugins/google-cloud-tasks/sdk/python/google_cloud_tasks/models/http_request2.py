from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.http_method_model import HttpMethodModelOrStr
from .o_auth_token3 import OAuthToken3, OAuthToken3Dict
from .oidc_token3 import OidcToken3, OidcToken3Dict


class HttpRequest2(SdkBaseModel):
    """HTTP request that is sent to the worker. An HTTP task is a task that has HttpRequest set."""

    http_method: Optional[HttpMethodModelOrStr] = Field(default=UNSET, alias="httpMethod")
    """The HTTP method to use for the request. The default is POST."""

    oidc_token: Optional[OidcToken3] = Field(default=UNSET, alias="oidcToken")
    """If specified, an `OIDC <https://developers.google.com/identity/protocols/OpenIDConnect>`__ token will be
    generated and attached as an ``Authorization`` header in the HTTP request. This type of authorization can be used
    for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself."""

    oauth_token: Optional[OAuthToken3] = Field(default=UNSET, alias="oauthToken")
    """If specified, an `OAuth token <https://developers.google.com/identity/protocols/OAuth2>`__ will be generated and
    attached as an ``Authorization`` header in the HTTP request. This type of authorization should generally only be
    used when calling Google APIs hosted on *.googleapis.com."""

    headers: Optional[dict[str, str]] = UNSET
    """HTTP request headers. This map contains the header field names and values. Headers can be set when the task is
    created. These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP
    request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Host:
    This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by
    Cloud Tasks. * User-Agent: This will be set to ``"Google-Cloud-Tasks"``. * ``X-Google-*``: Google use only. *
    ``X-AppEngine-*``: Google use only. ``Content-Type`` won't be set by Cloud Tasks. You can explicitly set
    ``Content-Type`` to a media type when the task is created. For example, ``Content-Type`` can be set to
    ``"application/octet-stream"`` or ``"application/json"``. Headers which can have multiple values (according to
    RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB."""

    url: Optional[str] = UNSET
    """Required. The full url path that the request will be sent to. This string must begin with either "http://" or
    "https://". Some examples are: ``http://acme.com`` and ``https://acme.com/sales:8080``. Cloud Tasks will encode some
    characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding. The
    ``Location`` header response from a redirect response [``300`` - ``399``] may be followed. The redirect is not
    counted as a separate attempt."""

    body: Optional[str] = UNSET
    """HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to
    set body on a task with an incompatible HttpMethod."""


class HttpRequest2Dict(TypedDict):
    http_method: NotRequired[HttpMethodModelOrStr]
    oidc_token: NotRequired[OidcToken3Dict]
    oauth_token: NotRequired[OAuthToken3Dict]
    headers: NotRequired[dict[str, str]]
    url: NotRequired[str]
    body: NotRequired[str]
