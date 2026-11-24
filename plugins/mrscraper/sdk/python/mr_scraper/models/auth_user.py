from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AuthUser(SdkBaseModel):
    address: Optional[str] = UNSET
    avatar: Optional[str] = UNSET
    birth_date: Optional[str] = Field(default=UNSET, alias="birthDate")
    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    created_by_id: Optional[str] = Field(default=UNSET, alias="createdById")
    database_connection_string: Optional[str] = Field(default=UNSET, alias="databaseConnectionString")
    deleted_at: Optional[str] = Field(default=UNSET, alias="deletedAt")
    deleted_by_id: Optional[str] = Field(default=UNSET, alias="deletedById")
    domain_targets: Optional[list[str]] = Field(default=UNSET, alias="domainTargets")
    email: Optional[str] = UNSET
    gender: Optional[str] = UNSET
    id: Optional[str] = UNSET
    is_verified: Optional[bool] = Field(default=UNSET, alias="isVerified")
    name: Optional[str] = UNSET
    onboarding_completed_at: Optional[str] = Field(default=UNSET, alias="onboardingCompletedAt")
    otp: Optional[Any] = UNSET
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    rabbit_mq_queue_name: Optional[str] = Field(default=UNSET, alias="rabbitMqQueueName")
    updated_at: Optional[str] = Field(default=UNSET, alias="updatedAt")
    updated_by_id: Optional[str] = Field(default=UNSET, alias="updatedById")


class AuthUserDict(TypedDict):
    address: NotRequired[str]
    avatar: NotRequired[str]
    birth_date: NotRequired[str]
    created_at: NotRequired[str]
    created_by_id: NotRequired[str]
    database_connection_string: NotRequired[str]
    deleted_at: NotRequired[str]
    deleted_by_id: NotRequired[str]
    domain_targets: NotRequired[list[str]]
    email: NotRequired[str]
    gender: NotRequired[str]
    id: NotRequired[str]
    is_verified: NotRequired[bool]
    name: NotRequired[str]
    onboarding_completed_at: NotRequired[str]
    otp: NotRequired[Any]
    phone_number: NotRequired[str]
    rabbit_mq_queue_name: NotRequired[str]
    updated_at: NotRequired[str]
    updated_by_id: NotRequired[str]
