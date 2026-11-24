from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.ssl_inspection1 import SslInspection1, SslInspection1Dict


class Data10(SdkBaseModel):
    ssl_inspection: SslInspection1 = Field(alias="sslInspection")


class Data10Dict(TypedDict):
    ssl_inspection: SslInspection1Dict
