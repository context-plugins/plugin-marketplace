from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TokenRequest(SdkBaseModel):
    code: str
    client_id: str
    """OAuth API key that is a public identifier for app"""

    client_secret: str
    """OAuth client secret that is a private secret known only to app and authorization server"""

    redirect_uri: str
    """Authorization server will redirect the user back to the application via redirect url"""

    grant_type: str
    """Type of grant used to get an access token"""

    refresh_extended_token: Optional[bool] = UNSET
    """Whether to refresh (regenerate) the extended access token. Defaults to false when absent. Set to true to refresh;
    false or omit to reuse an existing extended token when available."""


class TokenRequestDict(TypedDict):
    code: str
    client_id: str
    client_secret: str
    redirect_uri: str
    grant_type: str
    refresh_extended_token: NotRequired[bool]
