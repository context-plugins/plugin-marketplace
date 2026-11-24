from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type6 import Type6OrStr


class GoogleCloudApigeeV1AliasRevisionConfig(SdkBaseModel):
    type_: Optional[Type6OrStr] = Field(default=UNSET, alias="type")
    name: Optional[str] = UNSET
    """Name of the alias revision included in the keystore in the following format:
    ``organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}``"""

    location: Optional[str] = UNSET
    """Location of the alias file. For example, a Google Cloud Storage URI."""


class GoogleCloudApigeeV1AliasRevisionConfigDict(TypedDict):
    type_: NotRequired[Type6OrStr]
    name: NotRequired[str]
    location: NotRequired[str]
