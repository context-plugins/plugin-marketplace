from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CmekConfig(SdkBaseModel):
    """Describes the customer-managed encryption key (CMEK) configuration associated with a project and location."""

    name: Optional[str] = UNSET
    """Output only. The config resource name which includes the project and location and must end in 'cmekConfig', in
    the format ``projects/PROJECT_ID/locations/LOCATION_ID/cmekConfig``"""

    kms_key: Optional[str] = Field(default=UNSET, alias="kmsKey")
    """Resource name of the Cloud KMS key, of the form
    ``projects/PROJECT_ID/locations/LOCATION_ID/keyRings/KEY_RING_ID/cryptoKeys/KEY_ID``, that will be used to encrypt
    the Queues & Tasks in the region. Setting this as blank will turn off CMEK encryption."""


class CmekConfigDict(TypedDict):
    name: NotRequired[str]
    kms_key: NotRequired[str]
