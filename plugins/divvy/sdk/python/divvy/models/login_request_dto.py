from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LoginRequestDto(SdkBaseModel):
    """API login"""

    dev_key: str = Field(alias="devKey")
    """Developer key sent to you by BILL when you create a developer account"""

    username: str
    """Email address used to sign in to your BILL account"""

    password: Optional[str] = UNSET
    """Password used to sign in to your BILL account"""

    console_api_token: Optional[str] = Field(default=UNSET, alias="consoleApiToken")
    """Console API token.

    As a BILL Accountant Console user, use ``POST /v3/login`` to sign in to a client organization.
    * ``username``: Your BILL Accountant Console email address
    * ``consoleApiToken``: Your Console API token
    * ``devKey``: Developer key of the client organization
    * ``organizationId``: Organization ID of the client organization

    See `BILL Accountant Console operations <https://developer.bill.com/docs/bill-accountant-console-operations>`__ for
    more information."""

    organization_id: str = Field(alias="organizationId")
    """Organization ID"""

    remember_me_id: Optional[str] = Field(default=UNSET, alias="rememberMeId")
    """MFA ID. Set this field for creating an MFA-trusted API session.

    This MFA ID is generated when you set ``rememberMe`` as ``true`` in your ``POST /v3/mfa/challenge/validate``
    request. This value expires in 30 days.

    See `Validate MFA challenge <https://developer.bill.com/reference/validatechallenge>`__ for more information."""

    device: Optional[str] = UNSET
    """Mobile device name. This is a nickname for your mobile device. Set this field when you set ``rememberMeId``."""


class LoginRequestDtoDict(TypedDict):
    dev_key: str
    username: str
    password: NotRequired[str]
    console_api_token: NotRequired[str]
    organization_id: str
    remember_me_id: NotRequired[str]
    device: NotRequired[str]
