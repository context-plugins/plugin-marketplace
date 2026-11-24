from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.egress_transport import EgressTransportOrStr


class CreateTrunkRequest(SdkBaseModel):
    """Provide ``name`` plus at least one direction's config — an ``egressHost`` (egress), one or more ``allowedIps``
    (IP-authenticated ingress), or ``registrationEnabled: true`` (registration ingress). A request with none of them is
    rejected with ``no_config``."""

    name: str
    egress_host: Optional[str] = Field(default=UNSET, alias="egressHost")
    """Hostname or IP of your SIP endpoint. Setting it enables egress delivery. Must be a public host."""

    egress_port: int = Field(default=5060, alias="egressPort")
    """Defaults to 5060, or 5061 when ``egressTransport`` is ``tls``."""

    egress_transport: Optional[EgressTransportOrStr] = Field(default=UNSET, alias="egressTransport")
    allowed_ips: Optional[list[str]] = Field(default=UNSET, alias="allowedIps")
    """Public IPv4 source IPs for ingress."""

    ingress_enabled: Optional[bool] = Field(default=UNSET, alias="ingressEnabled")
    registration_enabled: Optional[bool] = Field(default=UNSET, alias="registrationEnabled")
    """Create a registration trunk for a PBX with no static public IP: your PBX registers to CallNode over TLS instead
    of being allow-listed by address, and calls we place to you go to whatever contact it last registered from. The
    response carries ``sipPassword`` once."""

    default_phone_number_id: Optional[str] = Field(default=UNSET, alias="defaultPhoneNumberId")
    """One of your numbers' ids — the default ingress agent."""

    outbound_cli_number_id: Optional[str] = Field(default=UNSET, alias="outboundCliNumberId")
    """One of your numbers' ids — caller ID presented on termination calls when the From is not an owned number."""

    confirm_monthly_fee: Optional[bool] = Field(default=UNSET, alias="confirmMonthlyFee")
    """Set true to acknowledge your plan's additional-trunk fee when you are beyond the included count."""


class CreateTrunkRequestDict(TypedDict):
    name: str
    egress_host: NotRequired[str]
    egress_port: NotRequired[int]
    egress_transport: NotRequired[EgressTransportOrStr]
    allowed_ips: NotRequired[list[str]]
    ingress_enabled: NotRequired[bool]
    registration_enabled: NotRequired[bool]
    default_phone_number_id: NotRequired[str]
    outbound_cli_number_id: NotRequired[str]
    confirm_monthly_fee: NotRequired[bool]
