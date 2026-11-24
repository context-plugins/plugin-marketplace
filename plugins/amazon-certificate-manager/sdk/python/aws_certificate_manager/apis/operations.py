from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.get_account_configuration_error import (
    GetAccountConfigurationErrorBody,
    get_account_configuration_error_mapper,
)
from ..errors.get_acme_external_account_binding_credentials_error import (
    GetAcmeExternalAccountBindingCredentialsErrorBody,
    get_acme_external_account_binding_credentials_error_mapper,
)
from ..errors.list_certificate_domain_validations_error import (
    ListCertificateDomainValidationsErrorBody,
    list_certificate_domain_validations_error_mapper,
)
from ..errors.put_account_configuration_error import (
    PutAccountConfigurationErrorBody,
    put_account_configuration_error_mapper,
)
from ..errors.renew_certificate_error import RenewCertificateErrorBody, renew_certificate_error_mapper
from ..errors.request_certificate2_error import RequestCertificate2ErrorBody, request_certificate2_error_mapper
from ..errors.resend_validation_email_error import ResendValidationEmailErrorBody, resend_validation_email_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..errors.update_certificate_options_error import (
    UpdateCertificateOptionsErrorBody,
    update_certificate_options_error_mapper,
)
from ..models.enums.x_amz_target1_aws_certificate_manager_operations_api import (
    XAmzTarget1AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target2_aws_certificate_manager_operations_api import (
    XAmzTarget2AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target3_aws_certificate_manager_operations_api import (
    XAmzTarget3AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target4_aws_certificate_manager_operations_api import (
    XAmzTarget4AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target5_aws_certificate_manager_operations_api import (
    XAmzTarget5AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target6_aws_certificate_manager_operations_api import (
    XAmzTarget6AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target7_aws_certificate_manager_operations_api import (
    XAmzTarget7AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target8_aws_certificate_manager_operations_api import (
    XAmzTarget8AwsCertificateManagerOperationsApiOrStr,
)
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..models.enums.x_amz_target_aws_certificate_manager_operations_api import (
    XAmzTargetAwsCertificateManagerOperationsApiOrStr,
)
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def get_account_configuration(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns the account configuration options associated with an Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_account_configuration(x_amz_target, request_options=request_options))

    def get_acme_external_account_binding_credentials(
        self,
        x_amz_target: XAmzTarget5AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by
        ACME clients during account registration to bind to the endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_acme_external_account_binding_credentials(
                x_amz_target, request_options=request_options
            ),
        )

    def list_certificate_domain_validations(
        self,
        x_amz_target: XAmzTarget6AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the
        active validation configuration, and the requested validation configuration when a validation method migration
        is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to
        retrieve the CNAME records required for DNS validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InvalidArgsException; ResourceNotFoundException; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_certificate_domain_validations(x_amz_target, request_options=request_options)
        )

    def put_account_configuration(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry.
        This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge
        events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive
        events starting 45 days before certificate expiration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ThrottlingException; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.put_account_configuration(x_amz_target, request_options=request_options))

    def renew_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with
        ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing
        Managed Renewal in the ACM User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; RequestInProgressException; ResourceNotFoundException; ValidationException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.renew_certificate(x_amz_target, request_options=request_options))

    def request_certificate2(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidDomainValidationOptionsException; InvalidParameterException;
                InvalidTagException; LimitExceededException; TagPolicyException; TooManyTagsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.request_certificate2(x_amz_target, request_options=request_options))

    def resend_validation_email(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Resends the email that requests domain ownership validation. The domain owner or an authorized representative
        must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in
        the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the
        validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can
        request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have
        elapsed since your original request or since your last attempt to resend validation mail, you must request a new
        certificate. For more information about setting up your contact email addresses, see Configure Email for your
        Domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidDomainValidationOptionsException; InvalidStateException;
                ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.resend_validation_email(x_amz_target, request_options=request_options))

    def tag_resource(
        self,
        x_amz_target: XAmzTarget7AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM
        resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate
        instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been
        applied to a resource, use the ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ResourceNotFoundException; ServiceQuotaExceededException; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def untag_resource(
        self,
        x_amz_target: XAmzTarget8AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more
        tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the
        ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    def update_certificate_options(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates certificate options. You can use this operation to change the domain validation method or specify
        whether to export your certificate. For more information, see Migrate from email to DNS validation and
        Certificate Manager Exportable Managed Certificates.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException; InvalidArnException; InvalidStateException; LimitExceededException;
                ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_certificate_options(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def get_account_configuration(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns the account configuration options associated with an Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_account_configuration(x_amz_target, request_options=request_options)
        )

    async def get_acme_external_account_binding_credentials(
        self,
        x_amz_target: XAmzTarget5AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by
        ACME clients during account registration to bind to the endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_acme_external_account_binding_credentials(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_certificate_domain_validations(
        self,
        x_amz_target: XAmzTarget6AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the
        active validation configuration, and the requested validation configuration when a validation method migration
        is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to
        retrieve the CNAME records required for DNS validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InvalidArgsException; ResourceNotFoundException; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_certificate_domain_validations(
                x_amz_target, request_options=request_options
            ),
        )

    async def put_account_configuration(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry.
        This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge
        events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive
        events starting 45 days before certificate expiration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ThrottlingException; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.put_account_configuration(x_amz_target, request_options=request_options)
        )

    async def renew_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with
        ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing
        Managed Renewal in the ACM User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; RequestInProgressException; ResourceNotFoundException; ValidationException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.renew_certificate(x_amz_target, request_options=request_options))

    async def request_certificate2(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidDomainValidationOptionsException; InvalidParameterException;
                InvalidTagException; LimitExceededException; TagPolicyException; TooManyTagsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.request_certificate2(x_amz_target, request_options=request_options))

    async def resend_validation_email(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Resends the email that requests domain ownership validation. The domain owner or an authorized representative
        must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in
        the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the
        validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can
        request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have
        elapsed since your original request or since your last attempt to resend validation mail, you must request a new
        certificate. For more information about setting up your contact email addresses, see Configure Email for your
        Domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidDomainValidationOptionsException; InvalidStateException;
                ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.resend_validation_email(x_amz_target, request_options=request_options)
        )

    async def tag_resource(
        self,
        x_amz_target: XAmzTarget7AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM
        resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate
        instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been
        applied to a resource, use the ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ResourceNotFoundException; ServiceQuotaExceededException; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def untag_resource(
        self,
        x_amz_target: XAmzTarget8AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more
        tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the
        ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    async def update_certificate_options(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates certificate options. You can use this operation to change the domain validation method or specify
        whether to export your certificate. For more information, see Migrate from email to DNS validation and
        Certificate Manager Exportable Managed Certificates.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException; InvalidArnException; InvalidStateException; LimitExceededException;
                ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_certificate_options(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account_configuration(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetAccountConfigurationErrorBody]:
        """Returns the account configuration options associated with an Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetAccountConfiguration"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_account_configuration_error_mapper,
            request_options=request_options,
        )

    def get_acme_external_account_binding_credentials(
        self,
        x_amz_target: XAmzTarget5AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetAcmeExternalAccountBindingCredentialsErrorBody]:
        """Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by
        ACME clients during account registration to bind to the endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetAcmeExternalAccountBindingCredentials"),
            headers=[
                param[XAmzTarget5AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_acme_external_account_binding_credentials_error_mapper,
            request_options=request_options,
        )

    def list_certificate_domain_validations(
        self,
        x_amz_target: XAmzTarget6AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCertificateDomainValidationsErrorBody]:
        """Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the
        active validation configuration, and the requested validation configuration when a validation method migration
        is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to
        retrieve the CNAME records required for DNS validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCertificateDomainValidations"),
            headers=[
                param[XAmzTarget6AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_certificate_domain_validations_error_mapper,
            request_options=request_options,
        )

    def put_account_configuration(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PutAccountConfigurationErrorBody]:
        """Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry.
        This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge
        events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive
        events starting 45 days before certificate expiration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutAccountConfiguration"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=put_account_configuration_error_mapper,
            request_options=request_options,
        )

    def renew_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RenewCertificateErrorBody]:
        """Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with
        ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing
        Managed Renewal in the ACM User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RenewCertificate"),
            headers=[
                param[XAmzTargetAwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=renew_certificate_error_mapper,
            request_options=request_options,
        )

    def request_certificate2(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RequestCertificate2ErrorBody]:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RequestCertificate"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=request_certificate2_error_mapper,
            request_options=request_options,
        )

    def resend_validation_email(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ResendValidationEmailErrorBody]:
        """Resends the email that requests domain ownership validation. The domain owner or an authorized representative
        must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in
        the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the
        validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can
        request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have
        elapsed since your original request or since your last attempt to resend validation mail, you must request a new
        certificate. For more information about setting up your contact email addresses, see Configure Email for your
        Domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ResendValidationEmail"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=resend_validation_email_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self,
        x_amz_target: XAmzTarget7AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM
        resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate
        instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been
        applied to a resource, use the ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[
                param[XAmzTarget7AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self,
        x_amz_target: XAmzTarget8AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more
        tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the
        ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[
                param[XAmzTarget8AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    def update_certificate_options(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateCertificateOptionsErrorBody]:
        """Updates certificate options. You can use this operation to change the domain validation method or specify
        whether to export your certificate. For more information, see Migrate from email to DNS validation and
        Certificate Manager Exportable Managed Certificates.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateCertificateOptions"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_certificate_options_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account_configuration(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetAccountConfigurationErrorBody]:
        """Returns the account configuration options associated with an Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetAccountConfiguration"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_account_configuration_error_mapper,
            request_options=request_options,
        )

    async def get_acme_external_account_binding_credentials(
        self,
        x_amz_target: XAmzTarget5AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetAcmeExternalAccountBindingCredentialsErrorBody]:
        """Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by
        ACME clients during account registration to bind to the endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetAcmeExternalAccountBindingCredentials"),
            headers=[
                param[XAmzTarget5AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_acme_external_account_binding_credentials_error_mapper,
            request_options=request_options,
        )

    async def list_certificate_domain_validations(
        self,
        x_amz_target: XAmzTarget6AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCertificateDomainValidationsErrorBody]:
        """Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the
        active validation configuration, and the requested validation configuration when a validation method migration
        is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to
        retrieve the CNAME records required for DNS validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCertificateDomainValidations"),
            headers=[
                param[XAmzTarget6AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_certificate_domain_validations_error_mapper,
            request_options=request_options,
        )

    async def put_account_configuration(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PutAccountConfigurationErrorBody]:
        """Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry.
        This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge
        events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive
        events starting 45 days before certificate expiration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutAccountConfiguration"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=put_account_configuration_error_mapper,
            request_options=request_options,
        )

    async def renew_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RenewCertificateErrorBody]:
        """Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with
        ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing
        Managed Renewal in the ACM User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RenewCertificate"),
            headers=[
                param[XAmzTargetAwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=renew_certificate_error_mapper,
            request_options=request_options,
        )

    async def request_certificate2(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RequestCertificate2ErrorBody]:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RequestCertificate"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=request_certificate2_error_mapper,
            request_options=request_options,
        )

    async def resend_validation_email(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ResendValidationEmailErrorBody]:
        """Resends the email that requests domain ownership validation. The domain owner or an authorized representative
        must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in
        the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the
        validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can
        request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have
        elapsed since your original request or since your last attempt to resend validation mail, you must request a new
        certificate. For more information about setting up your contact email addresses, see Configure Email for your
        Domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ResendValidationEmail"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=resend_validation_email_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self,
        x_amz_target: XAmzTarget7AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM
        resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate
        instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been
        applied to a resource, use the ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[
                param[XAmzTarget7AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self,
        x_amz_target: XAmzTarget8AwsCertificateManagerOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more
        tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the
        ListTagsForResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[
                param[XAmzTarget8AwsCertificateManagerOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    async def update_certificate_options(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateCertificateOptionsErrorBody]:
        """Updates certificate options. You can use this operation to change the domain validation method or specify
        whether to export your certificate. For more information, see Migrate from email to DNS validation and
        Certificate Manager Exportable Managed Certificates.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateCertificateOptions"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_certificate_options_error_mapper,
            request_options=request_options,
        )
