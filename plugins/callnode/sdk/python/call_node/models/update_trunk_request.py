from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.egress_transport import EgressTransportOrStr
from .enums.status_callnode_io_sip_trunks_api import StatusCallnodeIoSipTrunksApiOrStr


class UpdateTrunkRequest(SdkBaseModel):
    """Any subset of the fields below. Send ``egressHost`` as ``null`` or ``""`` to clear it (ingress-only). A request
    with no recognized fields returns ``no_fields``."""

    name: Optional[str] = UNSET
    egress_host: OptionalNullable[str] = Field(default=UNSET, alias="egressHost")
    """Null or empty string clears egress delivery."""

    egress_port: Optional[int] = Field(default=UNSET, alias="egressPort")
    egress_transport: Optional[EgressTransportOrStr] = Field(default=UNSET, alias="egressTransport")
    status: Optional[StatusCallnodeIoSipTrunksApiOrStr] = UNSET
    egress_enabled: Optional[bool] = Field(default=UNSET, alias="egressEnabled")
    allowed_ips: Optional[list[str]] = Field(default=UNSET, alias="allowedIps")
    ingress_enabled: Optional[bool] = Field(default=UNSET, alias="ingressEnabled")
    registration_enabled: Optional[bool] = Field(default=UNSET, alias="registrationEnabled")
    """Turning this on for the first time mints credentials and returns ``sipPassword`` once in the response. Turning it
    off keeps the credentials on file so re-enabling does not disturb a configured PBX."""

    default_phone_number_id: OptionalNullable[str] = Field(default=UNSET, alias="defaultPhoneNumberId")
    outbound_cli_number_id: OptionalNullable[str] = Field(default=UNSET, alias="outboundCliNumberId")
    """Null clears the trunk-level outbound caller ID."""


class UpdateTrunkRequestDict(TypedDict):
    name: NotRequired[str]
    egress_host: NotRequired[str | None]
    egress_port: NotRequired[int]
    egress_transport: NotRequired[EgressTransportOrStr]
    status: NotRequired[StatusCallnodeIoSipTrunksApiOrStr]
    egress_enabled: NotRequired[bool]
    allowed_ips: NotRequired[list[str]]
    ingress_enabled: NotRequired[bool]
    registration_enabled: NotRequired[bool]
    default_phone_number_id: NotRequired[str | None]
    outbound_cli_number_id: NotRequired[str | None]
