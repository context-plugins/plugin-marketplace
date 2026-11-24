from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Keystore(SdkBaseModel):
    """Datastore for Certificates and Aliases."""

    name: Optional[str] = UNSET
    r"""Required. Resource ID for this keystore. Values must match the regular expression ``[\w[:space:].-]{1,255}``."""

    aliases: Optional[list[str]] = UNSET
    """Output only. Aliases in this keystore."""


class GoogleCloudApigeeV1KeystoreDict(TypedDict):
    name: NotRequired[str]
    aliases: NotRequired[list[str]]
