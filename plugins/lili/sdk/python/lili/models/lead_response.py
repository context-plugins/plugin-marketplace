from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ubo_response_data import UboResponseData, UboResponseDataDict


class LeadResponse(SdkBaseModel):
    """Contains the information on an account registration."""

    customer_id: UUID = Field(alias="customerId")
    """A unique ID for the customer (same as person ID)"""

    location: str
    """A unique URL to be used by the customer for a personalized application flow"""

    token: str
    """The token that should be sent to Lili Connect UI"""

    partner_supplied_id: Optional[str] = Field(default=UNSET, alias="partnerSuppliedId")
    """The uniqueID provided by the partner in the Create Application call. Empty if none was supplied"""

    person_id: UUID = Field(alias="personId")
    """The unique ID of the registered person"""

    metadata: Optional[dict[str, str]] = UNSET
    """The metadata key-value pairs stored on the customer"""

    ubo_data: Optional[list[UboResponseData]] = Field(default=UNSET, alias="uboData")
    """The UBOs of the business"""


class LeadResponseDict(TypedDict):
    customer_id: UUID
    location: str
    token: str
    partner_supplied_id: NotRequired[str]
    person_id: UUID
    metadata: NotRequired[dict[str, str]]
    ubo_data: NotRequired[list[UboResponseDataDict]]
