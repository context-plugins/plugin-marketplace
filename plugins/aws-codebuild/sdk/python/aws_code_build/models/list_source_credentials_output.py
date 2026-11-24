from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_credentials_info import SourceCredentialsInfo, SourceCredentialsInfoDict


class ListSourceCredentialsOutput(SdkBaseModel):
    source_credentials_infos: Optional[list[SourceCredentialsInfo]] = Field(
        default=UNSET, alias="sourceCredentialsInfos"
    )
    """A list of SourceCredentialsInfo objects. Each SourceCredentialsInfo object includes the authentication type,
    token ARN, and type of source provider for one set of credentials."""


class ListSourceCredentialsOutputDict(TypedDict):
    source_credentials_infos: NotRequired[list[SourceCredentialsInfoDict]]
