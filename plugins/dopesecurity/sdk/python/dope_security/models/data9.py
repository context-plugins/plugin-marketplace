from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ssl_inspection_response import SslInspectionResponse, SslInspectionResponseDict


class Data9(SdkBaseModel):
    ssl_inspection: SslInspectionResponse = Field(alias="sslInspection")
    """SSL inspection configuration for a policy."""


class Data9Dict(TypedDict):
    ssl_inspection: SslInspectionResponseDict
