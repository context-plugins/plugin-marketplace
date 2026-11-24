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
from ..errors.add_tags_to_certificate_error import AddTagsToCertificateErrorBody, add_tags_to_certificate_error_mapper
from ..errors.list_tags_for_certificate_error import (
    ListTagsForCertificateErrorBody,
    list_tags_for_certificate_error_mapper,
)
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.remove_tags_from_certificate_error import (
    RemoveTagsFromCertificateErrorBody,
    remove_tags_from_certificate_error_mapper,
)
from ..models.enums.x_amz_target1_aws_certificate_manager_tag_api import XAmzTarget1AwsCertificateManagerTagApiOrStr
from ..models.enums.x_amz_target2_aws_certificate_manager_tag_api import XAmzTarget2AwsCertificateManagerTagApiOrStr
from ..models.enums.x_amz_target3_aws_certificate_manager_tag_api import XAmzTarget3AwsCertificateManagerTagApiOrStr
from ..models.enums.x_amz_target_aws_certificate_manager_tag_api import XAmzTargetAwsCertificateManagerTagApiOrStr
from ..server.server import Server


class TagApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagApiWithRawResponse(client, server, auth)

    def add_tags_to_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on
        input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only
        to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag
        to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply
        the same tag to multiple certificates if you want to filter for a common relationship among those certificates.
        Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those
        resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load
        balancer to indicate that they are both used by the same website. For more information, see Tagging ACM
        certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that
        have been applied to the certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidParameterException; InvalidTagException; ResourceNotFoundException;
                TagPolicyException; ThrottlingException; TooManyTagsException; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.add_tags_to_certificate(x_amz_target, request_options=request_options))

    def list_tags_for_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name
        (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To
        delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource
        type. For all other ACM resource types, use ListTagsForResource instead.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_certificate(x_amz_target, request_options=request_options))

    def list_tags_for_resource(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more
        tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def remove_tags_from_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify
        the value portion of the tag when calling this function, the tag will be removed regardless of value. If you
        specify a value, the tag is removed only if it is associated with the specified value. This action applies only
        to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a
        certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific
        ACM certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidParameterException; InvalidTagException; ResourceNotFoundException;
                TagPolicyException; ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.remove_tags_from_certificate(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TagApiWithRawResponse:
        return self._with_raw_response


class AsyncTagApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagApiWithRawResponse(client, server, auth)

    async def add_tags_to_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on
        input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only
        to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag
        to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply
        the same tag to multiple certificates if you want to filter for a common relationship among those certificates.
        Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those
        resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load
        balancer to indicate that they are both used by the same website. For more information, see Tagging ACM
        certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that
        have been applied to the certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidParameterException; InvalidTagException; ResourceNotFoundException;
                TagPolicyException; ThrottlingException; TooManyTagsException; ValidationException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.add_tags_to_certificate(x_amz_target, request_options=request_options)
        )

    async def list_tags_for_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name
        (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To
        delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource
        type. For all other ACM resource types, use ListTagsForResource instead.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_certificate(x_amz_target, request_options=request_options)
        )

    async def list_tags_for_resource(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more
        tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def remove_tags_from_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify
        the value portion of the tag when calling this function, the tag will be removed regardless of value. If you
        specify a value, the tag is removed only if it is associated with the specified value. This action applies only
        to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a
        certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific
        ACM certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidParameterException; InvalidTagException; ResourceNotFoundException;
                TagPolicyException; ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.remove_tags_from_certificate(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTagApiWithRawResponse:
        return self._with_raw_response


class TagApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_tags_to_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddTagsToCertificateErrorBody]:
        """Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on
        input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only
        to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag
        to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply
        the same tag to multiple certificates if you want to filter for a common relationship among those certificates.
        Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those
        resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load
        balancer to indicate that they are both used by the same website. For more information, see Tagging ACM
        certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that
        have been applied to the certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddTagsToCertificate"),
            headers=[
                param[XAmzTargetAwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=add_tags_to_certificate_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForCertificateErrorBody]:
        """Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name
        (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To
        delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource
        type. For all other ACM resource types, use ListTagsForResource instead.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForCertificate"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_certificate_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more
        tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def remove_tags_from_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerTagApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RemoveTagsFromCertificateErrorBody]:
        """Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify
        the value portion of the tag when calling this function, the tag will be removed regardless of value. If you
        specify a value, the tag is removed only if it is associated with the specified value. This action applies only
        to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a
        certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific
        ACM certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RemoveTagsFromCertificate"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=remove_tags_from_certificate_error_mapper,
            request_options=request_options,
        )


class AsyncTagApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_tags_to_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddTagsToCertificateErrorBody]:
        """Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your
        Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on
        input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only
        to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag
        to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply
        the same tag to multiple certificates if you want to filter for a common relationship among those certificates.
        Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those
        resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load
        balancer to indicate that they are both used by the same website. For more information, see Tagging ACM
        certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that
        have been applied to the certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddTagsToCertificate"),
            headers=[
                param[XAmzTargetAwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=add_tags_to_certificate_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForCertificateErrorBody]:
        """Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name
        (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To
        delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource
        type. For all other ACM resource types, use ListTagsForResource instead.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForCertificate"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_certificate_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the
        certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more
        tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def remove_tags_from_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerTagApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RemoveTagsFromCertificateErrorBody]:
        """Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify
        the value portion of the tag when calling this function, the tag will be removed regardless of value. If you
        specify a value, the tag is removed only if it is associated with the specified value. This action applies only
        to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a
        certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific
        ACM certificate, use the ListTagsForCertificate action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RemoveTagsFromCertificate"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerTagApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=remove_tags_from_certificate_error_mapper,
            request_options=request_options,
        )
