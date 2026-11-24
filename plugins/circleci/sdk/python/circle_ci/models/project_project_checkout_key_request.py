from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1_circle_ci_rest_api_v1_ssh_key_api import Type1CircleCiRestApiV1SshKeyApiOrStr


class ProjectProjectCheckoutKeyRequest(SdkBaseModel):
    type_: Type1CircleCiRestApiV1SshKeyApiOrStr = Field(alias="type")
    """The type of checkout key to create"""


class ProjectProjectCheckoutKeyRequestDict(TypedDict):
    type_: Type1CircleCiRestApiV1SshKeyApiOrStr
