from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.state1_doi_t_service_accounts_api import State1DoiTServiceAccountsApiOrStr


class UpdateServiceAccountTokenRequest(SdkBaseModel):
    """The state to move an API token to."""

    state: State1DoiTServiceAccountsApiOrStr
    """``active`` to enable the token, ``disabled`` to stop it authenticating. Any other value, ``deleted`` and
    ``expired`` included, returns ``400``. Re-enabling a token whose expiry has passed returns ``422``."""


class UpdateServiceAccountTokenRequestDict(TypedDict):
    state: State1DoiTServiceAccountsApiOrStr
