from __future__ import annotations

from typing import Any

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.customer_user_status import CustomerUserStatusOrStr


class UpsertCustomerUserRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    email: OptionalNullable[EmailStr] = UNSET
    metadata: OptionalNullable[dict[str, Any]] = UNSET
    status: Optional[CustomerUserStatusOrStr] = UNSET


class UpsertCustomerUserRequestDict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[EmailStr | None]
    metadata: NotRequired[dict[str, Any] | None]
    status: NotRequired[CustomerUserStatusOrStr]
