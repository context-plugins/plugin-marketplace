from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_alias_revision_config import (
    GoogleCloudApigeeV1AliasRevisionConfig,
    GoogleCloudApigeeV1AliasRevisionConfigDict,
)


class GoogleCloudApigeeV1KeystoreConfig(SdkBaseModel):
    aliases: Optional[list[GoogleCloudApigeeV1AliasRevisionConfig]] = UNSET
    """Aliases in the keystore."""

    name: Optional[str] = UNSET
    """Resource name in the following format: ``organizations/{org}/environments/{env}/keystores/{keystore}``"""


class GoogleCloudApigeeV1KeystoreConfigDict(TypedDict):
    aliases: NotRequired[list[GoogleCloudApigeeV1AliasRevisionConfigDict]]
    name: NotRequired[str]
