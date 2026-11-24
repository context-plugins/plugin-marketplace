from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.egress_transport import EgressTransportOrStr
from .enums.status_callnode_io_sip_trunks_api import StatusCallnodeIoSipTrunksApiOrStr
from .registration import Registration, RegistrationDict


class SipTrunk(SdkBaseModel):
    """A saved SIP trunk — egress (outbound BYOC), ingress (inbound from your PBX/SBC), or both."""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    """1–64 characters. Unique across your active trunks."""

    status: Optional[StatusCallnodeIoSipTrunksApiOrStr] = UNSET
    egress_enabled: Optional[bool] = Field(default=UNSET, alias="egressEnabled")
    """Whether outbound (BYOC) delivery to ``egressHost`` is enabled."""

    egress_host: OptionalNullable[str] = Field(default=UNSET, alias="egressHost")
    """Hostname or IP of your SIP endpoint for outbound delivery. Null for an ingress-only trunk."""

    egress_port: int = Field(default=5060, alias="egressPort")
    egress_transport: Optional[EgressTransportOrStr] = Field(default=UNSET, alias="egressTransport")
    ingress_enabled: Optional[bool] = Field(default=UNSET, alias="ingressEnabled")
    """Whether inbound calls from ``allowedIps`` are accepted."""

    allowed_ips: Optional[list[str]] = Field(default=UNSET, alias="allowedIps")
    """Public IPv4 addresses your PBX/SBC sends from — the accepted ingress source IPs."""

    default_phone_number_id: OptionalNullable[str] = Field(default=UNSET, alias="defaultPhoneNumberId")
    """The id of one of your numbers — the default agent for ingress calls that do not match one of your own DIDs."""

    outbound_cli_number_id: OptionalNullable[str] = Field(default=UNSET, alias="outboundCliNumberId")
    """The id of one of your numbers, presented as caller ID on outbound (termination) calls when the INVITE's From is
    not itself one of your numbers — the normal case for a registration trunk, whose From carries its auth username. A
    From that IS one of your live numbers always wins, so a multi-number PBX can still present per-call caller ID."""

    monthly_fee_applies: Optional[bool] = Field(default=UNSET, alias="monthlyFeeApplies")
    """True when this trunk is beyond your plan's included count and is billed the additional-trunk fee."""

    next_billing_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="nextBillingDate")
    registration: Optional[Registration] = UNSET
    """Registration-trunk settings, for a PBX with no static public IP. Never contains the password or its digest."""

    sip_password: Optional[str] = Field(default=UNSET, alias="sipPassword")
    """Present ONLY on the response that mints it — creating a registration trunk, enabling registration, or rotating
    credentials. It cannot be retrieved afterwards; store it immediately."""

    sip_password_notice: Optional[str] = Field(default=UNSET, alias="sipPasswordNotice")
    """Human-readable reminder that accompanies ``sipPassword``."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class SipTrunkDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    status: NotRequired[StatusCallnodeIoSipTrunksApiOrStr]
    egress_enabled: NotRequired[bool]
    egress_host: NotRequired[str | None]
    egress_port: NotRequired[int]
    egress_transport: NotRequired[EgressTransportOrStr]
    ingress_enabled: NotRequired[bool]
    allowed_ips: NotRequired[list[str]]
    default_phone_number_id: NotRequired[str | None]
    outbound_cli_number_id: NotRequired[str | None]
    monthly_fee_applies: NotRequired[bool]
    next_billing_date: NotRequired[RFC3339DateTime | None]
    registration: NotRequired[RegistrationDict]
    sip_password: NotRequired[str]
    sip_password_notice: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
