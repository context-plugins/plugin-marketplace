from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Documentation8(SdkBaseModel):
    """Optional. Additional external documentation for this operation. For OpenAPI spec, this will map to
    ``operation.documentation`` in the spec."""

    external_uri: Optional[str] = Field(default=UNSET, alias="externalUri")
    """Optional. The uri of the externally hosted documentation."""


class GoogleCloudApihubV1Documentation8Dict(TypedDict):
    external_uri: NotRequired[str]
