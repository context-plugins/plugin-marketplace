from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FailureReason(str, Enum):
    """The reason the certificate request failed. This value exists only when the certificate status is FAILED. For more
    information, see Certificate Request Failed in the Certificate Manager User Guide."""

    NO_AVAILABLE_CONTACTS = "NO_AVAILABLE_CONTACTS"
    ADDITIONAL_VERIFICATION_REQUIRED = "ADDITIONAL_VERIFICATION_REQUIRED"
    DOMAIN_NOT_ALLOWED = "DOMAIN_NOT_ALLOWED"
    INVALID_PUBLIC_DOMAIN = "INVALID_PUBLIC_DOMAIN"
    DOMAIN_VALIDATION_DENIED = "DOMAIN_VALIDATION_DENIED"
    CAA_ERROR = "CAA_ERROR"
    PCA_LIMIT_EXCEEDED = "PCA_LIMIT_EXCEEDED"
    PCA_INVALID_ARN = "PCA_INVALID_ARN"
    PCA_INVALID_STATE = "PCA_INVALID_STATE"
    PCA_REQUEST_FAILED = "PCA_REQUEST_FAILED"
    PCA_NAME_CONSTRAINTS_VALIDATION = "PCA_NAME_CONSTRAINTS_VALIDATION"
    PCA_RESOURCE_NOT_FOUND = "PCA_RESOURCE_NOT_FOUND"
    PCA_INVALID_ARGS = "PCA_INVALID_ARGS"
    PCA_INVALID_DURATION = "PCA_INVALID_DURATION"
    PCA_ACCESS_DENIED = "PCA_ACCESS_DENIED"
    SLR_NOT_FOUND = "SLR_NOT_FOUND"
    OTHER = "OTHER"

    __str__ = str.__str__


FailureReasonOrStr: TypeAlias = Annotated[FailureReason | str, open_enum_validator(FailureReason)]
